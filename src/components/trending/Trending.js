import "./Trending.css";

function Trending() {
  return (
    <div className="trending">
      <div className="trending__title">
        <p>Trending</p>
      </div>
      <div className="trending__card">
        <img
          src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1e622ad6cbd63094e41d0ab54dc09a6ba360794f-600x400.jpg?w=750&fm=webp&q=40&fit=max"
          alt=""
        />
        <div className="trending__cardInfo">
          <h2>Our Favorites</h2>
          <h4>A selection of our favorite items just for you.</h4>
        </div>
      </div>
    </div>
  );
}

export default Trending;
