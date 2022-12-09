import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { getAllProjects } from "../../services/index";
import { isEmpty } from "../../utilities/array";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {   
    getAllProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <div className="projects-list__container" area="content">
      {isEmpty(projects) ? (
        <p className="loader">Loading Packs</p>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <Cards key={project.id}>              
              <h4>{project.name}</h4>
              <div className="project-tech-list">
                {project.packs.map((pack) => (
                  <p key={pack}>{pack}</p>
                ))}
                <Link to={`${project.id}`}><button> View More </button></Link>
              </div>
            </Cards>
          ))}
        </div>
      )}
      <div className="project-detail">
        <Outlet />
      </div>
    </div>
  );
}
