import React from "react";

function Home() {
  return (
    <div className="my-5">
      <h1 className="text-center">What are you looking for?</h1>

      <div className="row m-4">
        <div className="col text-center">
          <img
            src="src/img/sillon nordico.png"
            className="img-fluid img-home"
            alt=""
          />
          <h4>Sillones</h4>
        </div>
        <div className="col text-center">
          <img
            src="src/img/sillon nordico.png"
            className="img-fluid img-home"
            alt=""
          />
          <h4>Sillas</h4>
        </div>
        <div className="col text-center">
          <img
            src="src/img/sillon nordico.png"
            className="img-fluid img-home"
            alt=""
          />
          <h4>Mesas</h4>
        </div>
      </div>
      <hr />
      <h2 className="text-center">Featured Products</h2>
      <div className="row m-4">
        <div className="col text-center">
          <img src="src/img/sillon nordico.png" className="img-fluid" alt="" />
          <h4>Sillones</h4>
        </div>
        <div className="col text-center">
          <img src="src/img/sillon nordico.png" className="img-fluid" alt="" />
          <h4>Sillas</h4>
        </div>
        <div className="col text-center">
          <img src="src/img/sillon nordico.png" className="img-fluid" alt="" />
          <h4>Mesas</h4>
        </div>
        <div className="col text-center">
          <img src="src/img/sillon nordico.png" className="img-fluid" alt="" />
          <h4>Mesas</h4>
        </div>
        <div className="col text-center">
          <img src="src/img/sillon nordico.png" className="img-fluid" alt="" />
          <h4>Mesas</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
