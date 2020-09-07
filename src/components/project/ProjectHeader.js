import React from "react";
import { Grid } from "semantic-ui-react";
import he from "he";

const ProjectHeader = ({ project }) => {
  return (
    <Grid container centered>
      <Grid.Row className="row">
        {project.map((content) => (
          <div key={content.id}>
            <h1 className="bigtitle lead" style={{ marginBottom: 0 }}>
              {he.decode(content.title)}
            </h1>
            {content.text && <p className="lead">{he.decode(content.text)}</p>}
            <small>
              {content.categories &&
                content.categories.map((category, index) =>
                  index !== content.categories.length - 1
                    ? `${category}, `
                    : null
                )}
            </small>
          </div>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ProjectHeader;
