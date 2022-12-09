import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";
import CartWidget from "../../components/Layout/components/Navbar/CartWidget/CartWidget";
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
          <div className="project-link"><button> u$s {projectData.repo.price} - Add to Cart <CartWidget /></button></div>   
                 
          
        </div>
      ) : (
        <p>Loading Packs</p>
      )}
    </>
  );
}
