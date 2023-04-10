import React from "react";

export function IndexPage() {
  return (
    <React.Fragment>
      <br />
      <h1 className="text-center">Fag el-Gamous</h1>
      <br />
      <div className="text-center">
        <img
          src="../front.jpg"
          alt="Evacuation Site"
          style={{ width: "600px" }}
        />
        <br />
        <br />
        <p style={{ width: "55%", margin: "auto" }}>
          Welcome to Fag El-Gamous, a website dedicated to Egyptian
          archeological discoveries! Feel free to explore the many incredible
          findings and information provided by BYU professors and students.
        </p>
        <br />
        <p>
          Click <a href="https://egypt.byu.edu/p/Arcgis">here</a> to view a 3D
          rendering of the dig sites!
          <br />
          Click <a href="burial">here</a> to view all burials!
        </p>
      </div>
    </React.Fragment>
  );
}
