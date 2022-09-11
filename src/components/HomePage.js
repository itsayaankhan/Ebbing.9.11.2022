import React from 'react';
import Main from './__main__/Main';
import Sidebar from './__sidebar__/Sidebar';

import '../styles/__sidebar__/Sidebar.css';
import '../styles/__main__/Main.css';

const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <Main />
        </div>
    );
}

export default HomePage;
