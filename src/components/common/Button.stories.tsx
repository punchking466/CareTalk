import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component/Common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "full"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    size: "md",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    size: "md",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    size: "md",
    variant: "danger",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Button",
    size: "full",
    variant: "primary",
  },
};
