import type { Preview } from "@storybook/react-vite";
import React from "react";

/// <reference types="vite/client" />
import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/index.css";
import { TasksProvider } from "../src/context/TasksContext/tasksProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TasksProvider>
        <Story />
      </TasksProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#efe1e1",
        },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
