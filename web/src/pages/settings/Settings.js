import React from 'react';
import { Outlet } from 'react-router-dom';

const Settings = () => {
    const handleSignOut = ()=> {
        // sign out user
    }
    return (
        <div>
            <div>
                <button onClick={handleSignOut}
                type="button">Sign out</button>
            </div>            
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;