import React, {useState} from 'react';

const Signin = () => {
    const [ data, setData ] = useState({
        email: '',
        password: '',
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
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;