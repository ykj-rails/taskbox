import React from 'react'

import Task from './Task'

export default {
  component: Task,
  title: 'Task',
}

const Template = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}

export const LongTitle = Template.bind({})
LongTitle.args = {
  task: {
    ...Default.args.task,
    title:
      'Controls is a great way to get non-developers playing with your components and stories. It can do much more than we ve seen here; we recommend reading the official documentation to learn more about it. However, there are many more ways you can customize Storybook to fit your workflow with addons. In the create an addon guide well teach you that, by creating an addon that will help you supercharge your development workflow.',
  },
}
