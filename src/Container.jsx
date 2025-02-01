import "./App.css";

function Container() {
  return (
    <div className="container">
      <div className="bgImg" ></div>

      <div className="top">
        <div className="profileImg"></div>
        <h1>
          Victor Crest <span>26</span>
        </h1>
        <p>London</p>
      </div>

      <hr />

      <div className="popularity">
        <div className="followers">
          <h2>80K</h2>
          <p>Followers</p>
        </div>

        <div className="likes">
          <h2>803K</h2>
          <p>Likes</p>
        </div>

        <div className="photos">
          <h2>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
