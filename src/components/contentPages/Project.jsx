
function Project({project}) {

    return (
            <section class="projectFlexItem yellowHover" style={{backgroundImage: `url(${project.image})`, width: '1000px', height: '450px'}} title={project.title}> 
                <a href={project.liveLink} target="_blank">
                    <figure class="projectCardHeader">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" class="githubLink">Github Repo</a>
                    </figure>
                </a>
            </section>
      
      );
}

export default Project;