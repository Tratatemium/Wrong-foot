import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem } from "./ListItem";
import { TasksContext } from "../../context/TasksContext/tasksContext";

const STORY_ID = "story-task-1";

const mockContext = {
  tasks: [{ id: STORY_ID, text: "Buy groceries", completed: false }],
  addTask: () => {},
  findTask: (id: string) =>
    id === STORY_ID
      ? { id: STORY_ID, text: "Buy groceries", completed: false }
      : undefined,
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const meta = {
  title: "components/ListItem",
  component: ListItem,
  decorators: [
    (Story) => (
      <TasksContext.Provider value={mockContext}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <Story />
        </ul>
      </TasksContext.Provider>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: STORY_ID,
  },
};
