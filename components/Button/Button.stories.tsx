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
  colorScheme: "blue",
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  colorScheme: "red",
};

export const Success = ButtonTemplate.bind({});
Success.args = {
  colorScheme: "green",
};