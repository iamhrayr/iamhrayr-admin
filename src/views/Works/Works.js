import React from "react";
import { Table } from "antd";
import { Query } from "react-apollo";

// queries
import WORKS_QUERY from "../../graphql/queries/works.gql";

import columns from "./table-columns";

export default class Works extends React.PureComponent {
    render() {
        return (
            <Query query={WORKS_QUERY}>
                {({ loading, error, data }) => {
                    // if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Table
                            loading={loading}
                            rowKey={row => row.id}
                            columns={columns}
                            dataSource={data.works}
                        />
                    );
                }}
            </Query>
        );
    }
}
