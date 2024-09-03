// rfce
import React from 'react'
import { Fingerprint, LogIn as LoginIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// auth-step-3
import { signInWithPopup } from "firebase/auth";
import { auth, db } from '../../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';


async function createUser(authData) {
    const userObject = authData.user;
    const { uid, photoURL, displayName, email } = userObject;
    await setDoc(doc(db, "users", uid), {
        email,
        profile_pic: photoURL,
        name: displayName
    })


}


function Login() {
    // use karte ho 
    const { setUserData, userData } = useAuth();

    const navigate = useNavigate();

    if (userData != null) {
        navigate("/");
        return <></>
    }


    const handleLogin = async () => {
        // login wala logic 
        // auth-step-4
        const userData = await signInWithPopup(auth, new GoogleAuthProvider);
        await createUser(userData);
       
        navigate("/");
    }
    return (
        <>
            <div className='h-[220px] bg-[#04a784]'>

                <div className='flex ml-[200px] pt-10 items-center gap-4'>
                    <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt=""
                        className='h-8'
                    />
                    <div className="text-white uppercase font-medium">Chattify</div>
                </div>
            </div>
            <div className='h-[calc(100vh-220px)] bg-[#eff2f5] flex justify-center items-center relative'>
                <div className='h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]'>
                    <Fingerprint className='h-20 w-20 text-[#04a784]'
                        strokeWidth={1} />
                    <div>Sign In</div>
                    <div>Sign in with your google account to get started.</div>
                    <button
                        onClick={handleLogin}
                        className='flex gap-2 items-center bg-[#04a784] p-4 text-white rounded-[5px]'>
                        <div >
                            Sign in with Google
                        </div>
                        <LoginIcon />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Login;