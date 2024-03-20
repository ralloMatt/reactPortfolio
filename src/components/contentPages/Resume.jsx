import resume from '../../files/ralloResume.pdf';

function Resume() {

    return (
        <section class="list" style={{padding:'50px'}}>
          <h1>My Resume</h1>
          <a href={resume} class="big" download><h2>Download Here</h2></a>

          <h1>Website Knowledge</h1>

          <h2>Front End:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>React</li>
            <li>Bootstrap / Bulma CSS Frameworks</li>
          </ul>

          <h2>Back End:</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>

          <h1>Programming Languages</h1>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>

          <h1>Older Websites</h1>
          <ul>
            <li><a href="https://rallomatt.github.io/Portfolio/" class="big" target="_blank">Second One</a></li>
            <li><a href="https://rallomatt.github.io/ralloMattWebsite/" class="big" target="_blank">First One</a></li>
          
          </ul>
        </section>
      );


}

export default Resume;
