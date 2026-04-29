
import Footer from '@/components/sheared/Footer';
import NavBar from '@/components/sheared/NavBar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>

            <NavBar />
            <main>
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    );
};

export default layout;