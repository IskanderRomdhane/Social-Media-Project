import {auth , provider} from "../config/firebase"
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () =>{
        const result = await signInWithPopup(auth,provider);
        navigate('/');
    }

    return (
        <div>
            <p>sign in with google</p>
            <button onClick={signInWithGoogle}>sign in with google</button>
        </div>
    );
}