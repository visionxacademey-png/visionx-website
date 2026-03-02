import React from "react";
import { Link } from "react-scroll";
import "./TopInternships.css";
import { useNavigate } from "react-router-dom";


function TopInternships() {
  const navigate = useNavigate();
  return (
    <section className="top-internships">
      <div className="top-container">
        <h2>New Works</h2>

        <Link to="internship" smooth duration={600}>
          <button className="top-btn" onClick={() => navigate("/internship")}>View All</button>
        </Link>
      </div>
    </section>
  );
}

export default TopInternships;