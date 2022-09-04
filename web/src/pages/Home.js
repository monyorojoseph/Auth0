import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <Link to='/settings'><button type="button">Go to settings</button></Link> 
                <Link to='/sign-in'><button type="button">Sign in</button></Link> 
                <Link to='/sign-up'><button type="button">Sign up</button></Link>           
            </div>
        </div>
    );
};

export default Home;