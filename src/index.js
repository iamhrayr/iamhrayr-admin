import "./ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { createUploadLink } from "apollo-upload-client";
import { ApolloLink } from "apollo-link";

import "antd/dist/antd.css";

import App from "./App";

const client = new ApolloClient({
  link: ApolloLink.from([
    createUploadLink({ uri: "http://localhost:4000/graphql" })
  ]),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
