import React from "react";
import './Tagskill.css';

// eslint-disable-next-line react/prop-types
export default function Tagskill({ tags, tags1, tags2, tags3, tags4, tags5 }) {
  return (
    <div className="tags-coontainer">
      <div className="section-container">
        <h6 className="project-tags">{tags}</h6>
        <h6 className="project-tags">{tags1}</h6>
        <h6 className="project-tags">{tags2}</h6>
        <h6 className="project-tags">{tags3}</h6>
        <h6 className="project-tags">{tags4}</h6>
      </div>
    </div>
  );
}