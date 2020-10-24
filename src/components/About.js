import React from 'react'
import './styles/about.css'

export const About = () => {

    return (
        <div className='aboutSection container'>
            <div className='centered'>
                <div>
                    <div>
                        <span>
                            About <span className='accent'>Me</span> <span className='primary'>.</span>
                        </span>
                    </div>
                    <div>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio 
                            molestiae suscipit iusto voluptas exercitationem eius esse illum corporis, 
                            officiis dolorum veritatis, ullam laboriosam
                        </p>
                        <p className='paraFade'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio 
                            molestiae suscipit iusto voluptas exercitationem eius esse illum corporis, 
                            officiis dolorum veritatis, ullam laboriosam
                        </p>
                        <div className='aboutBtns'>
                            <button>Download CV</button>
                            <button>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backgroundFix aboutMeImg darken'>

            </div>
        </div>
    )
}