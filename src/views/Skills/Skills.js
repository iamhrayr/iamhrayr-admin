import React from "react";
import { Form, Icon, Input, Button, List, Typography, Dropdown } from "antd";
import { BlockPicker, ChromePicker } from "react-color";

export default () => {
    return (
        <>
            <List
                bordered={false}
                dataSource={["ill", "pho"]}
                renderItem={item => (
                    <List.Item>
                        <Form layout="inline">
                            <Form.Item>
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Name"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Percent"
                                />
                            </Form.Item>
                            <Dropdown
                                overlay={<ChromePicker />}
                                trigger={["click"]}
                            >
                                <a className="ant-dropdown-link" href="#">
                                    Choose Color <Icon type="down" />
                                </a>
                            </Dropdown>
                        </Form>
                    </List.Item>
                )}
            />

            <Button type="primary" icon="plus-circle">
                Add new Skill
            </Button>
        </>
    );
};
