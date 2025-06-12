import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

const Layout = ({ children }) => {

    return (
        <>

            {/* Header */}
            <Header />

            <MobileNav />

            {/* Content */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />

            {/* JS Scripts */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            {/*<script src="/resources/js/mjw.js"></script>*/}
            <script src="/resources/bootstrap/js/scripts.js"></script>
        </>
    );
};

export default Layout;