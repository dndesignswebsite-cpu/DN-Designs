import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Breadcrumb.css"

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(x => x);

  return (
    <div>
        <section>
                <div className="container">
                <div className="row">
                <div className="col">
                <Link className="Bread" to="/">Home</Link>
      {paths.map((value, index) => {
        const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <span key={index}>
            {" > "}
            <Link className="Bread-sub" to={fullPath}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
          </span>
        );
      })}
                </div>
              </div>
              </div>
              </section>
      
    </div>
  );
};

export default Breadcrumb;
