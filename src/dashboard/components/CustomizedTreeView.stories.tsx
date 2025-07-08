import type { Meta, StoryObj } from '@storybook/react';
import CustomizedTreeView from './CustomizedTreeView';

const meta: Meta<typeof CustomizedTreeView> = {
  title: 'Dashboard/CustomizedTreeView',
  component: CustomizedTreeView,
};
export default meta;

export const Default: StoryObj<typeof CustomizedTreeView> = {
  render: () => <CustomizedTreeView />,
}; 