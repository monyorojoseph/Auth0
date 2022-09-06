import React, { useState } from 'react';

const Changerpassword = () => {
    const [ data, setData ] = useState({
        old_password: '',
        new_password: ''
    })

    const changeHandler = (e)=> {
        e.persist()
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
                        <label>Old password</label>
                        <input type="password" name="old_password" placeholder="your old password" 
                        required value={data.old_password} onChange={changeHandler}/>
                    </div>

                    <div>
                        <label>New password</label>
                        <input type="password" name="new_password" placeholder="your password"  
                        required value={data.new_password} onChange={changeHandler}/>
                    </div>
                    
                    <div>
                        <button type="submit">Change</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Changerpassword;