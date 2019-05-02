import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router";

// queries & mutations
import EDIT_WORK from "Graphql/work/editWork.gql";
import WORK_QUERY from "Graphql/work/workQuery.gql";

import AddEditWorkForm from "../shared/AddEditWorkForm";

export default ({ match }) => {
  const { id } = match.params;

  return (
    <Query query={WORK_QUERY} variables={{ id }}>
      {({ data, loading: dataLoading, error }) => (
        <Mutation
          key={id}
          mutation={EDIT_WORK}
          // update={(cache, { data }) => {
          //   // debugger;
          //   // const { todos } = cache.readQuery({ query: GET_TODOS });
          //   // cache.writeQuery({
          //   //   query: GET_TODOS,
          //   //   data: { todos: todos.concat([addTodo]) }
          //   // });
          // }}
        >
          {(editWork, { loading: editWorkLoading }) => (
            <AddEditWorkForm
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
