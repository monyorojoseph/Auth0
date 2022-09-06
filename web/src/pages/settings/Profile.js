import React from 'react';
import ChangePassword from './Changerpassword';
const Profile = () => {
    return (
        <div>
            <div>
                <div>
                    <h4>User profile</h4>
                    <div>
                        <p>Username:-</p>  
                        <p>Email:-</p>                      
                    </div>
                </div>
            </div>
            <ChangePassword />
        </div>
    );
};

export default Profile;