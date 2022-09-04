import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [ data, setData ] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const changeHandler = (e)=> {
        e.persist();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }   
    
    const submitHandler = (e)=> {
        e.preventDefault();
        if (data.password === data.confirm_password){
            const user = {email:data.email, username:data.username, password:data.password}
            // save to localhost
            localStorage.setItem('user_data', JSON.stringify(user))
            navigate('/sign-in')
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="your username" 
                        value={data.username} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="your email address" 
                        value={data.email} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="your password" 
                        value={data.password} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Confirm password</label>
                        <input type="password" name="confirm_password" placeholder="confirm your password" 
                        value={data.confirm_password} onChange={changeHandler}/>
                    </div>
                    
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;