import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";
import { Title } from "./Title";

const meta = {
  title: "components/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      localStorage.setItem("checklist-title", "My Checklist");
      return <Story />;
    },
  ],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Editing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole("button", { name: /edit title/i });
    await userEvent.click(editButton);
  },
};
