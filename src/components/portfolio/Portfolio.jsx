import "./portfolio.css"
import projects from "../../projects.json";



export default function Portfolio() {
    
    const displayProjects = projects.map((project, index)=>
    <li key={project.title + index}>
        <div className="card">
      <div><img src={project.image} className="screenshot" alt="projectpicture"/></div>
      <div className="card__content">
        <div className="card__title">{project.title}</div>
        <p className="card__text">{project.desc}</p>
        <a href={project.repo} rel="noreferrer" target="_blank"><button className="btn btn--block card__btn">Repository</button> </a>
        <a href={project.link} rel="noreferrer" target="_blank"><button className="btn btn--block card__btn">Deployed</button> </a>
</div></div>
    </li>
    
    )
    
    
    
    return (
        <div className="portfolio" id="portfolio">
        <ul className="cards">
        {displayProjects}
        </ul>
        </div>
    )
}




