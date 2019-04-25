import React from "react";
import { Button, List } from "antd";

// components
import SkillItem from "./SkillItem";

// export default ({ move, swap, push, insert, form }) => (
export default props => (
    <>
        <List
            bordered={false}
            dataSource={props.form.values.skills}
            renderItem={(item, index) => (
                <SkillItem index={index} item={item} {...props} />
            )}
        />
        <Button
            type="primary"
            icon="plus-circle"
            onClick={() => props.push({ name: "", percent: "", color: "red" })}
        >
            Add new Skill
        </Button>
    </>
);
