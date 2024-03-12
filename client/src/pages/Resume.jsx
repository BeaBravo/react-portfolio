import ResumePDF from '../assets/BeatrizBravoResume.pdf'
export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>


            <h5 style={{ marginTop: '3rem' }}>Download my <a
                href={ResumePDF}
                target="_blank"
                style={{ textDecoration: 'none', color: '#cb958e' }}>resume</a></h5>

            <h3 style={{ fontWeight: 'bolder', marginTop: '3rem' }}>Front-End Skills</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JS</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
            </ul>

            <h3 style={{ fontWeight: 'bolder', marginTop: '3rem' }}>Back-End Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>

            <h3 style={{ fontWeight: 'bolder', marginTop: '3rem' }}>Data Skills</h3>
            <ul>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>

            <h3 style={{ fontWeight: 'bolder', marginTop: '3rem' }}>Development and Operations</h3>
            <ul>
                <li>GitHub</li>
                <li>Git</li>
                <li>Version Control</li>
            </ul>

        </div>
    );
}