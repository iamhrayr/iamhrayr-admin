import React from "react";
import { Tag, Avatar, Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

// mutations
import SET_WORK_VISIBILITY from "../../graphql/mutations/setWorkVisibility.gql";

export default [
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
        key: "title",
        render: text => <Link to="/">{text}</Link>
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description"
    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category"
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        )
    },
    {
        title: "Publishd",
        dataIndex: "published",
        key: "published",
        render: (isPublished, row) => (
            <Mutation
                mutation={SET_WORK_VISIBILITY}
                variables={{ id: row.id, published: !isPublished }}
                // update={cache => {
                //     cache.writeFragment({
                //         id: row.id,
                //         fragment: gql`
                //             fragment work on Works {
                //                 published
                //             }
                //         `,
                //         data: {
                //             published: !isPublished,
                //             __typename: "Work"
                //         }
                //     });
                // }}
                // optimisticResponse={}
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
                    <Button type="primary" shape="circle" icon="edit" />{" "}
                    <Button type="danger" shape="circle" icon="delete" />
                </>
            );
        }
    }
];
