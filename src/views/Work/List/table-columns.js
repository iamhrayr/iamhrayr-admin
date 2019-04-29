import React from "react";
import { Tag, Avatar, Button, Switch } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Mutation } from "react-apollo";

// mutations
import SET_WORK_VISIBILITY from "../../../graphql/mutations/setWorkVisibility.gql";
import DELETE_WORK from "../../../graphql/mutations/deleteWork.gql";

export default props => [
  {
    title: "Thumbnail",
    dataIndex: "thumbnail",
    key: "thumbnail",
    width: 80,
    render: src => <Avatar shape="square" size="large" src={src} />
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
    // render: text => <Link to="/">{text}</Link>
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: category => category.name
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags =>
      tags.map(tag => (
        <Tag color="green" key={tag}>
          {tag.toUpperCase()}
        </Tag>
      ))
  },
  {
    title: "Publishd",
    dataIndex: "published",
    key: "published",
    render: (isPublished, row) => (
      <Mutation
        mutation={SET_WORK_VISIBILITY}
        variables={{ id: row.id, published: !isPublished }}
      >
        {(setWorkVisibility, { data, loading, error }) => {
          return (
            <Switch
              checkedChildren="on"
              unCheckedChildren="off"
              defaultChecked={isPublished}
              onChange={setWorkVisibility}
              // checked={data.published}
            />
          );
        }}
      </Mutation>
    )
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (col, row) => {
      return (
        <>
          <Button
            type="primary"
            shape="circle"
            icon="edit"
            onClick={() => props.history.push(`/works/${row.id}`)}
          />{" "}
          <Mutation mutation={DELETE_WORK} variables={{ id: row.id }}>
            {(deleteWork, { loading }) => (
              <Button
                type="danger"
                shape="circle"
                icon="delete"
                onClick={deleteWork}
              />
            )}
          </Mutation>
        </>
      );
    }
  }
];
