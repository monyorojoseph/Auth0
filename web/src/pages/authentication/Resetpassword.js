import React, { useState } from 'react';

const Resetpassword = () => {
    const [ email, setEmail ] = useState('')
    const submitHandler = (e)=> {
        e.preventDefault();
        console.log({email})
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="your email address" 
                        required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>                    
                    <div>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Resetpassword;