import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Les mots de passe ne correspondent pas"});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Le nom d'utilisateur existe déjà"});
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            });
        } else {
            res.status(400).json({error: "Données utilisateur invalides"});
        }

    } catch (error) {
        console.log("Erreur dans le contrôleur d'inscription");
        res.status(500).json({error: "Erreur interne du serveur"});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Nom d'utilisateur ou mot de passe invalide" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture
        });

    } catch (error) {
        console.log("Erreur dans le contrôleur de connexion");
        res.status(500).json({error: "Erreur interne du serveur"});
    }
}

export const logout = (_req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Déconnecté avec succès" });
    } catch (error) {
        console.log("Erreur dans le contrôleur de déconnexion");
        res.status(500).json({error: "Erreur interne du serveur"});
    }
}