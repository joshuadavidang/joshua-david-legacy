import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  label: "Button",
  backgroundColor: "red",
};

export const Success = ButtonTemplate.bind({});
Success.args = {
  label: "Success",
  backgroundColor: "green",
};