import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { TasksProvider } from "../../context/TasksContext/tasksProvider";

const meta = {
  title: "components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <TasksProvider>
        <Story />
      </TasksProvider>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
