import "./Home.css";

export default function Home() {
  return (
    <div className="home-page__container" area="content">      
      <div className="header">
        <span className="home-title">Gaia Sustainable Food</span>
        <p className="title-detail">
          Welcome to my WebStore! I'm Iván, founder of Gaia Sustainable Food. I'm so happy you are here. I invite you to look up my site and check up all the products we keep on stock. Please, take a look!. Don't forget to fill your Cart, and we'll take it home as fast as we can.
        </p>
        <a href="/catalogue"><button className="btn"> Take a Look! </button></a>
      </div>      
    </div>
  );
}
