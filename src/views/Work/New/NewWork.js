import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";

// queries & mutations
import ADD_WORK from "Graphql/work/addWork.gql";

import Form from "../shared/Form";

export default () => (
  <Mutation mutation={ADD_WORK}>
    {(addWork, { loading }) => (
      <Form onSubmit={addWork} onSubmitLoading={loading} />
    )}
  </Mutation>
);
