// @flow

import React from "react";
import { Formik, Field  } from "formik";

interface IProps {
    comments: any[];
    writeComment: (comment: string) => void;
}

export default ({ comments, writeComment }: IProps) => {
    function onFormSubmit(values, actions) {
        writeComment(values.comment);
    }

    return (
        <div>
            <Formik 
                initialValues={{comment: ''}}
                onSubmit={onFormSubmit}
            >
                {({values, isSubmitting, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="comment" placeholder="Write comment" />
                        <button type="submit">Leave comment</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}