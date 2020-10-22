import React from 'react'
import Nav from './Nav'
import './styles/home.css'

class Landing extends React.Component {

    render () {
        return(
            <div className='homePageWrapper backgroundFix'>
                <Nav />
                <div className='jumbotron'>
                    <div>
                        <h2>Howdy, I Am</h2>
                        <h1>Micheal Jackson</h1>
                        <p>Freelance Web Developer Based In NY City</p>
                        <div className='jumbotronBtns'>
                            <button>Portfolio</button>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing