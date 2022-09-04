import React from 'react';
import { Outlet } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
            <div>
                <button type="button">Sign out</button>
            </div>            
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;