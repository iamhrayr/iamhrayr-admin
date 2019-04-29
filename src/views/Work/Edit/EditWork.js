import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router";

// queries & mutations
import EDIT_WORK from "Graphql/mutations/editWork.gql";
import WORK_QUERY from "Graphql/queries/work.gql";

import Form from "../shared/Form";

export default ({ match }) => {
  const { id } = match.params;

  return (
    <Query query={WORK_QUERY} variables={{ id }}>
      {({ data, loading: dataLoading, error }) => (
        <Mutation mutation={EDIT_WORK}>
          {(addWork, { loading: addWorkLoading }) => (
            <Form
              onSubmut={addWork}
              onSubmitLoading={addWorkLoading}
              data={data.work}
              dataLoading={dataLoading}
              dataLoadingError={error}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};
