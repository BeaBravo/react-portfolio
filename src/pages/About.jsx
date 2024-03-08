import profilePic from '../assets/images/profile-pic.jpg'

export default function About() {
    return (
        <div id='about-me'>
            <h1>About Me</h1>
            <div>

                <img src={profilePic} alt='picture of me' style={{ width: 'auto', maxWidth: '50%', padding: '1em' }} />
                <p style={{ padding: '1em' }}>
                    Hey there, I'm Beatriz, a dynamic full-stack software developer with over 5 years of experience in engineering.
                    When I'm not immersed in the world of coding, you'll often find me out and about, exploring the great outdoors.
                    Whether I'm trekking through the breathtaking landscapes of the Rocky Mountains alongside my beloved Havapoo, Bono,
                    or venturing to new destinations around the globe, I thrive on adventure and discovery. I am all about continuous learning,
                    teamwork, and making a real impact.
                    < br>
                    </br>
                    Beyond my passion for technology, I am a dedicated mental health advocate, with the cause being close to my heart.
                    I am committed to collaborating on projects that aim to make mental health support more accessible and easier to navigate
                    for everyone. Together, let's work towards a brighter, healthier future.
                </p>
            </div>
            <h2>My values</h2>
            <p><span style={{ fontWeight: 'bold', fontSize: 'larger' }}>🧠 Mental health:</span> I wholeheartedly believe that nurturing our
                mental well-being is the cornerstone of success. When we feel truly comfortable and secure within ourselves, we're empowered to
                thrive in every aspect of life. I'm incredibly passionate about joining forces to make mental health support more approachable and
                readily available, and I'd be thrilled to collaborate on initiatives that bring this vision to life.
            </p>
            <p><span style={{ fontWeight: 'bold', fontSize: 'larger' }}>❤️ Inclusivity:</span> I deeply value inclusivity, recognizing that we all
                contribute unique perspectives and fresh ideas. Embracing diverse thoughts enriches our collective journey. I'm eager to collaborate
                on initiatives that prioritize accessibility and inclusivity in mental health support, ensuring that everyone's voice is heard and valued.
            </p>
            <p><span style={{ fontWeight: 'bold', fontSize: 'larger' }}>👩🏻‍🤝‍👨🏽👩🏿‍🤝‍👨🏼 Helping others:</span> I'm a firm believer in the power of helping others.
                Whether it's in overcoming challenges or pursuing our goals, no one should have to navigate obstacles alone. I'm committed
                to working towards solutions that make support and resources readily available to everyone.
            </p>
            <br></br>
            <h3>Navigate my site</h3>
            <p>You can find my deployed apps under the <a style={{textDecoration:'none'}} href='/Portfolio'>Portfolio</a> tab</p>
            <p>Additionally you can find a link to my GitHub and LinkedIn page on the footer</p>
            <p>You can contact me directly by sending me a message using the form in the <a href='/Contact'>Contact Me</a> tab</p>

        </div>
    );
}