import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "./Checklist";
import { TasksProvider } from "../../context/TasksContext/tasksProvider";

const meta = {
  title: "components/Checklist",
  component: Checklist,
  decorators: [
    (Story) => (
      <TasksProvider>
        <Story />
      </TasksProvider>
    ),
  ],
} satisfies Meta<typeof Checklist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
