import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(password);
        if(name === 'Admin' && password === '12345'){   
            localStorage.setItem('auth', 'true');
            window.location.reload();
        }
        setName('')
        setPassword('')
    }

    return (
        <div>
            <form onSubmit={login} className="my-form">
                <input 
                    className="my-input" 
                    type="text" 
                    placeholder="Enter login"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    className="my-input" 
                    type="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="my-button" >Log In</button>
            </form>
        </div>
    );
};

export default Login;