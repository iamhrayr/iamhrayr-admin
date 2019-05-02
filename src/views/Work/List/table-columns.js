import React from "react";
import { Tag, Avatar, Button, Switch } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Mutation } from "react-apollo";

// mutations
import SET_WORK_VISIBILITY from "Graphql/work/setWorkVisibility.gql";
import DELETE_WORK from "Graphql/work/deleteWork.gql";
import WORKS_QUERY from "Graphql/work/worksQuery.gql";

export default props => [
  {
    title: "Thumbnail",
    dataIndex: "thumbnail",
    key: "thumbnail",
    width: 80,
    render: thumbnail => (
      <Avatar shape="square" size="large" src={thumbnail.url} />
    )
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
            onClick={() => props.history.push(`/works/edit/${row.id}`)}
          />{" "}
          <Mutation
            mutation={DELETE_WORK}
            variables={{ id: row.id }}
            update={(cache, { data: { deleteWork } }) => {
              const { works } = cache.readQuery({ query: WORKS_QUERY });

              cache.writeQuery({
                query: WORKS_QUERY,
                data: { works: works.filter(w => w.id !== deleteWork.id) }
              });
            }}
          >
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
