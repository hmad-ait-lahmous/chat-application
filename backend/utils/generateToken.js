import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "100d"
    });

    res.cookie("jwt", token, {
        maxAge: 100 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS (Cross-Site Scripting) attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developement"
    });
}

export default generateTokenAndSetCookie;