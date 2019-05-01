import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router";

// queries & mutations
import EDIT_WORK from "Graphql/work/editWork.gql";
import WORK_QUERY from "Graphql/work/workQuery.gql";

import Form from "../shared/Form";

export default ({ match }) => {
  const { id } = match.params;

  return (
    <Query query={WORK_QUERY} variables={{ id }}>
      {({ data, loading: dataLoading, error }) => (
        <Mutation mutation={EDIT_WORK}>
          {(editWork, { loading: editWorkLoading }) => (
            <Form
              onSubmit={editWork}
              onSubmitLoading={editWorkLoading}
              data={data && data.work}
              dataLoading={dataLoading}
              dataLoadingError={error}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};
