import React from 'react';

//COMPONENTS
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


//ROUTING
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class Router extends React.Component {
    
    render() {
        return (
            <div className="router">

                <Login />
                {/* <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                    <Footer />
                </BrowserRouter> */}
            </div>
        )
}
}

