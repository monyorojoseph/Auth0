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
        console.log(data)
    }
    
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="your email address" 
                        value={data.username} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="your password"  
                        value={data.password} onChange={changeHandler}/>
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