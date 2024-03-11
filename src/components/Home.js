import React from 'react';
import HeroSection from './HeroSection';
import Teams from './Teams';
import BlogSection from './BlogSection';

const Home = ({ theme }) => {


    return (
        <div >
            <HeroSection />
            <BlogSection/>
            <Teams />
        </div>
    )
}

export default Home