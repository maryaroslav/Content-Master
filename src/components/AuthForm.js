import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../style/authForm.css';
import loginImg from '../img/login_1.png';
import registerImg from '../img/register_1.png';

import { login } from '../reducers/authSlice'

const AuthForm = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (type === 'register') {
            const userExists = users.find((user) => user.email === email);
            if (userExists) {
                alert('User alredy exists!');
                return;
            }

            const newUser = { id: Date.now(), name: username, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            dispatch(login(newUser));
            navigate('/explore')
        } else {
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                dispatch(login(user));
                navigate('/forum')
            } else {
                alert('Invalid email or password')
            }
        }
    }

    return (
        <div className="container-auth">
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h1>{type === 'login' ? 'Sign In to your account' : 'Create your account'}</h1>
                    <div className='input-email input-box'>
                        <p>Email</p>
                        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className='input-password input-box'>
                        <p>Password</p>
                        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    {type === 'register' && (
                        <div className='input-username input-box'>
                            <p>Username</p>
                            <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                        </div>
                    )}
                    <button className='btn-authForm' type="submit">{type === 'login' ? 'Sign In' : 'Sign Up'}</button>
                    {type === 'login' && (
                        <div className='register'>
                            <p>Don’t have an account? <a href="/register">Create account</a></p>
                        </div>
                    )}
                    {type === 'register' && (
                        <div className='register'>
                            <p>Already have an account? <a href="/login">Sign in</a></p>
                        </div>
                    )}
                </form>
            </div>
            <div className='image'>
                {type === 'login' ? <img src={loginImg} alt="login" /> : <img src={registerImg} alt="register" />}
            </div>
        </div>
    );
};

export default AuthForm;