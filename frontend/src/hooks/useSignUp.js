import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const sucess = handleInputErrors({fullName, username, password, confirmPassword});
        if (!sucess) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            
            localStorage.setItem('userInfo', JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {signup, loading};
}

export default useSignUp

const handleInputErrors = ({fullName, username, password, confirmPassword}) => {
    if (!fullName || !username || !password || !confirmPassword) {
        toast.error('Tous les champs sont requis');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Les mots de passe ne correspondent pas');
        return false;
    }

    if (password.length < 6) {
        toast.error('Le mot de passe doit contenir au moins 6 caractères');
        return false;
    }

    return true;
}
