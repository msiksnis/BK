import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__text">HOME OF THE WHOPPER</div>
        <div className="home__buttons">
          <button className="home__pickup">ORDER PICKUP</button>
          <button className="home__delivery">ORDER DELIVERY</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
