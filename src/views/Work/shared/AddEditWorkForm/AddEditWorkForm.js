import React from "react";
import { Form, Input, Button, Switch, Select, Row, Col, Spin } from "antd";
import { Query } from "react-apollo";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";

// compoentns
import Thumbnail from "./Thumbnail";
import Images from "./Images";
import EditableTagList from "./EditableTagList";

// queries & mutations
import CATEGORIES_QUERY from "Graphql/category/categoriesQuery.gql";
// import ADD_WORK from "Graphql/mutations/addWork.gql";

import formSchema from "./formSchema";

const AddEditWorkForm = ({
  onSubmit,
  onSubmitLoading,
  data,
  dataLoading,
  dataLoadingError,
  history
}) =>
  !dataLoading && (
    <Formik
      initialValues={{
        title: data ? data.title : "",
        description: data ? data.description : "",
        thumbnail: data ? data.thumbnail : {},
        images: data ? data.images : [],
        tags: data ? data.tags : [],
        category: data ? data.category.id : "",
        published: data ? data.published : false
      }}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        await onSubmit({ variables: { id: data && data.id, input: values } });
        actions.setSubmitting(false);
        history.push("/works");
      }}
      render={({
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
        isSubmitting
      }) => (
        <Spin spinning={isSubmitting}>
          <Form onSubmit={() => {}} className="login-form">
            <Row gutter={16}>
              <Col span={14}>
                <Form.Item
                  label="Title"
                  validateStatus={touched.title && errors.title && "error"}
                  help={touched.title && errors.title}
                >
                  <Input
                    placeholder="Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  label="Description"
                  validateStatus={
                    touched.description && errors.description && "error"
                  }
                  help={touched.description && errors.description}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  // label="thumbnail"
                  validateStatus={
                    touched.thumbnail && errors.thumbnail && "error"
                  }
                  help={touched.thumbnail && errors.thumbnail}
                >
                  <Thumbnail
                    src={values.thumbnail.url}
                    onAddImage={image => {
                      setFieldValue("thumbnail", image);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              validateStatus={touched.images && errors.images && "error"}
              help={touched.images && errors.images}
            >
              <Images setFieldValue={setFieldValue} images={values.images} />
            </Form.Item>

            <Form.Item
              label="Tags"
              validateStatus={touched.tags && errors.tags && "error"}
              help={touched.tags && errors.tags}
            >
              <EditableTagList
                tags={values.tags}
                onAdd={tag => setFieldValue("tags", [...values.tags, tag])}
                onRemove={tag =>
                  setFieldValue("tags", values.tags.filter(t => t !== tag))
                }
              />
            </Form.Item>

            <Query query={CATEGORIES_QUERY}>
              {({ data, loading, error }) => (
                <Form.Item
                  label="Category"
                  validateStatus={
                    touched.category && errors.category && "error"
                  }
                  help={touched.category && errors.category}
                >
                  <Select
                    placeholder="Select a category"
                    onChange={value => setFieldValue("category", value)}
                    value={values.category}
                    loading={loading}
                  >
                    {data.categories &&
                      data.categories.map(cat => (
                        <Select.Option value={cat.id} key={cat.id}>
                          {cat.name}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
              )}
            </Query>

            <Form.Item label="Publishd">
              <Switch
                checkedChildren="on"
                unCheckedChildren="off"
                defaultChecked={values.published}
                onChange={value => setFieldValue("published", value)}
              />
            </Form.Item>

            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={onSubmitLoading}
            >
              Save
            </Button>
          </Form>
        </Spin>
      )}
    />
  );

export default withRouter(AddEditWorkForm);
