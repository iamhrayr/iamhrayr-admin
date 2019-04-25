// @flow
import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

// components
import SkillsList from "./SkillsList";

class Skills extends React.PureComponent<{}, {}> {
    // const [skills, setSkill] = useState(["ill", "pho"]);
    render() {
        const skills = [
            {
                name: "ReactJS",
                percent: 80,
                color: "#f25d99"
            },
            {
                name: "JavaScript",
                percent: 76,
                color: "#ffcc66"
            }
        ];

        return (
            <div>
                <h1>Skills</h1>
                <Formik
                    initialValues={{ skills }}
                    onSubmit={values => {}}
                    render={formikProps => (
                        <FieldArray name="skills" component={SkillsList} />
                    )}
                />
            </div>
        );
    }
}

export default Skills;
