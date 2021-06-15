import React from 'react';
import Header from './components/Header';
import './index.css';

const Home = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="navbar">NavBar</div>
                <div className="feed">Feed</div>
            </main>
        </div>
    );
}

export default Home;