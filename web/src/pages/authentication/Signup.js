import React, {useState} from 'react';

const Signup = () => {
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
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="your username" 
                        required value={data.username} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="your email address" 
                        required value={data.email} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="your password" 
                        required value={data.password} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Confirm password</label>
                        <input type="password" name="confirm_password" placeholder="confirm your password" 
                        required value={data.confirm_password} onChange={changeHandler}/>
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