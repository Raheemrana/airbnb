import React from "react"
const Hero = () => {
    return(
        <section className='hero'>
            <img className = 'photo-grid' src = "../Assests/photo-grid.svg"/>
            <div className='hero--text'>  
                <h1 className="hero--title">
                    Online Experiences
                </h1>
                <div style={{width:'450px'}}>
                    <span className='hero--para'> 
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                    </span>
                </div>
            </div>
        </section>)
    }
export default Hero;