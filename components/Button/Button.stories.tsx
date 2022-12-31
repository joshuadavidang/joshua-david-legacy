import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    colorScheme: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  colorScheme: "blue",
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  colorScheme: "whatsapp",
};