import { Link, Outlet } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="about-me__container" area="content">
      <h2 className="title">Categories</h2>
    <div className="pack-container">
      <div className="packs">
        <div className="pack-card">
          <div className="pack-header">
            <h4 className="pack-title">
            Agroecological fruits packs
            </h4>
          </div>
          <div className="pack-body">
            <p className="pack-info">
              As we think of taking care our planet, we started farming our own lands free of chemicals. In order to follow our feelings and thougts of being more sustainables, we offer you all some differents agroecological packs
            </p>
          </div>
          <div className="pack-btn">
            <Link to="Agroecological Fruit Packs"><button className="btn">Check Them Out!</button></Link> 
          </div>
      </div>    
    </div>

    <div className="packs-2">
        <div className="pack-card">
          <div className="pack-header">
            <h4 className="pack-title">
            Agroecological Vegetable packs
            </h4>
          </div>
          <div className="pack-body">
            <p className="pack-info">
              As we think of taking care our planet, we started farming our own lands free of chemicals. In order to follow our feelings and thougts of being more sustainables, we offer you all some differents agroecological packs
            </p>
          </div>
          <div className="pack-btn">
            <Link to="Agroecological Vegetable Packs"><button className="btn">Check Them Out!</button></Link> 
          </div>
      </div>    
    </div>
    </div>   
      <Outlet />
    </div>
  );
}

/* <Link to="Agroecological Fruit Packs">Agroecological Fruit Packs</Link>
        <Link to="Agroecological Vegetable Packs">Agroecological Vegetable Packs</Link> */