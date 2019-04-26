import React, { useState } from "react";
import { Query } from "react-apollo";

// components
import SkillsList from "./comps/SkillsList";

// queries
import skillsQuery from "../../graphql/queries/skills.gql";

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            <Query query={skillsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return <SkillsList skills={data.skills} />;
                }}
            </Query>
        </div>
    );
};

export default React.memo(Skills);
