import React from 'react';
import me from '../me.jpg';
import ott from '../ottawa.jpg';
import code from '../code.jpg';

const Home = () => {
    return(
        <div className='root'>
            <header className='introduction red lighten-2'>
                <div className='container'>
                    <h1 className="center">Hello!</h1>
                    <img src={me} alt="Me" className="circle responsive-img"></img>
                    <h3 className="center"> Welcome To My Website</h3>
                </div>
            </header>
          
            <section id={"about"} className="blue lighten-2">
                <div className="container content valign-wrapper">
                    <div className="container content col s6">
                        <h3><i className="material-icons">info_outline</i> Hi, I'm Tyler</h3>
                        <p>I am currently a 3rd year Software Engineering student at Carleton University hoping to pursue a career . I live in Ottawa, ON and I am hoping to
                        create some fun and interactive projects. I enjoy many things like sports, playing video games and making cool projects.</p>
                    </div>
                    <div className="container content col s6">
                        <img src={ott} alt="ottawa" className="ott responsive-img"></img>
                    </div>  
                </div> 
            </section>

            <section id={"resume"} className="cyan lighten-3">
                <div className="container content">
                    <h3><i className="material-icons">insert_drive_file</i>It Me Job Info</h3>
                </div>
            </section>

            <section id={"projects"} className="green lighten-1">
                <div className='container content valign-wrapper'>
                    <div className="container content col s6">
                        <h3><i className="material-icons">code</i>It Me Projects</h3>
                        <p>Here are some cool projects that I have been working on over the past few years!</p>
                    </div>
                    <div className="container content col s6">
                        <img src={code} alt="code" className="code responsive-img"></img>
                    </div>
                </div>
            </section>

            <footer className="page-footer grey darken-3">
                <div className="footer-copyright">
                    Tyler Leung
                </div>
            </footer>
        </div>
    )
}

export default Home