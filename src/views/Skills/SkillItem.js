import React from "react";
import { BlockPicker, ChromePicker } from "react-color";
import { Form, Icon, Input, Button, List, Typography, Dropdown } from "antd";
import styled from "styled-components";

// styles components
const ColoredDiv = styled.div`
    display: inline-block;
    width: 40px;
    height: 15px;
    vertical-align: middle;
    background-color: ${props => props.color};
`;

export default ({ item, index, form }) => {
    return (
        <List.Item>
            <Form layout="inline">
                <Form.Item label="Name">
                    <Input
                        placeholder="Name"
                        value={item.name}
                        onChange={form.handleChange}
                        name={`skills[${index}].name`}
                        readOnly
                    />
                </Form.Item>
                <Form.Item label="Percent">
                    <Input
                        placeholder="Percent"
                        value={item.percent}
                        onChange={form.handleChange}
                        name={`skills[${index}].percent`}
                        readOnly
                    />
                </Form.Item>
                <Form.Item label="color">
                    <Dropdown
                        overlay={
                            <ChromePicker
                                color={item.color}
                                disableAlpha={false}
                                onChange={color => {
                                    form.setFieldValue(
                                        `skills[${index}].color`,
                                        color.hex
                                    );
                                }}
                            />
                        }
                        disabled
                        trigger={["click"]}
                    >
                        <ColoredDiv color={item.color} />
                    </Dropdown>
                </Form.Item>
                <Form.Item>
                    <Button
                        shape="circle"
                        type="primary"
                        icon="edit"
                        size="small"
                    />
                    <Button
                        shape="circle"
                        type="danger"
                        icon="delete"
                        size="small"
                    />
                </Form.Item>
            </Form>
        </List.Item>
    );
};
