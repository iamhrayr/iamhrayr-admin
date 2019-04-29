import React from "react";
import { Table, Button, Divider } from "antd";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

// queries
import WORKS_QUERY from "../../../graphql/queries/works.gql";

import getColumns from "./table-columns";

export default class WorkList extends React.PureComponent {
  render() {
    return (
      <>
        <Button
          type="primary"
          shape="round"
          icon="plus"
          onClick={this._navigateToNewWork}
        >
          Add New Work
        </Button>

        <Divider />

        <Query query={WORKS_QUERY}>
          {({ loading, error, data }) => {
            // if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
              <Table
                loading={loading}
                rowKey={row => row.id}
                columns={getColumns(this.props)}
                dataSource={data.works}
              />
            );
          }}
        </Query>
      </>
    );
  }

  _navigateToNewWork = () => {
    this.props.history.push("/works/new-work");
  };
}
