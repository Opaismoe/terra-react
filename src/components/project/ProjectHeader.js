import React from "react";
import he from "he";

const ProjectHeader = ({ oneProject }) => {
  return (
    <>
      {oneProject.map((project) => (
        <div key={project.id}>
          <h1 className="bigtitle lead" style={{ marginBottom: 0 }}>
            {he.decode(project.title)}
          </h1>
          {project.text && <p className="lead">{he.decode(project.text)}</p>}
          <small>
            {project.categories &&
              project.categories.map((category, index) =>
                index !== project.categories.length - 1 ? `${category}, ` : null
              )}
          </small>
        </div>
      ))}
    </>
  );
};

export default ProjectHeader;
