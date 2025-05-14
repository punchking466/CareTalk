import type { Meta, StoryObj } from "@storybook/react";
import LoginInput from "./LoginInput";

const meta: Meta<typeof LoginInput> = {
  title: "Component/Login/LoginInput",
  component: LoginInput,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
    errorMessage: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof LoginInput>;

export const EmailInput: Story = {
  args: {
    type: "email",
    value: "",
    placeholder: "이메일",
    errorMessage: "올바른 형식의 이메일을 입력해주세요.",
    onChange: () => {},
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    value: "",
    placeholder: "비밀번호",
    minLength: 10,
    errorMessage: "비밀번호는 최소 10자 이상이어야 합니다.",
    onChange: () => {},
  },
};
