import React from "react";

const ProjectHeader = ({ oneProject }) => {
  return (
    <>
      {oneProject.map((project) => (
        <div key={project.id}>
          <h1 className="bigtitle lead" style={{ marginBottom: 0 }}>
            {project.title}
          </h1>
          <p className="lead">{project.summary}</p>
          <small>
            {project.categories &&
              project.categories.map((category, index) =>
                index !== -1 ? `${category} ,` : null
              )}
          </small>
        </div>
      ))}
    </>
  );
};

export default ProjectHeader;
