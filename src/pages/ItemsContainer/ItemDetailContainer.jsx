import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";
import ItemCount from "./ItemCount/ItemCount"
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [projectData, setProjectData] = useState(null);
  const { ItemVegetableId } = useParams();

  useEffect(() => {
    getProject(ItemVegetableId).then((projectData) => {      
      setProjectData(projectData);
    });
  }, [ItemVegetableId]);

  return (
    <>
      {projectData ? (
        <div className="project__container">
          <div className="project-name"><h4>{projectData.name}</h4></div>
          <div className="project-detail">{projectData.detail}</div>
          <div className="project-link"><span>u$s {projectData.repo.price}</span></div>
          <div className="add-cart"><button className="btn">Add to Cart <ItemCount /></button></div>   
                 
          
        </div>
      ) : (
        <p>Loading Packs</p>
      )}
    </>
  );
}
