import React from "react";
import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";

function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">
          📃 <span className="span-nav"> Catatan</span> Mu
        </Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">
              <BiArchiveIn />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
