import React from 'react'
import '../components/Container/Container.css'
import SelfPhoto from '../images/Self-Photo.jpeg'

export default function About() {
    return (
        <div className='container'>
            <h1 className='section-heading'>About Me</h1>
            <img src={SelfPhoto} alt='Me looking into the camera'></img>
            <p className='aboutme'>
                I am a Full-Stack web developer having just earned my professional certificate from Georgia Tech through their Bootcamp Program. My background is in banking and financial management, and the analytical skills I was required to use in those fields made me want to get into web development. I am strongest in back-end development at this point, but feel like I am competent in all aspects. 
            </p>
            <p className='aboutme'>
                On a personal level, I am married to my beatiful wife Amber. We have 6 animals: 4 dogs and 2 cats, so the majority of our time (and money!) goes into taking care of them. I also enjoy golfing, barbequing, going to the beach, and supporting my favorite sports teams: The Auburn Tigers, The Atlanta Braves and the Green Bay Packers.
            </p>
        </div>
    );
}