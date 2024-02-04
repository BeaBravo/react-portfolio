import profilePic from '../assets/images/profile-pic.jpg'

export default function About() {
    return (
        <div id='about-me'>
            <h1>About Me</h1>
            <p>
                Hello, my name is Beatriz and I'm a new full-stack software
                developer, with 5 and a half years of experience as an engineer.
                When you don't find me in front of my computer, I am either hiking
                the Rocky Mountains with my 2-year old Havapoo Bono, or I'm
                exploring the globe.
            </p>
            <img src={profilePic} alt='picture of me' style={{width: '100%'}} />
        </div>
    );
}