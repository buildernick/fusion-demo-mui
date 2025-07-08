import type { Meta, StoryObj } from '@storybook/react';
import CustomizedDataGrid from './CustomizedDataGrid';

const meta: Meta<typeof CustomizedDataGrid> = {
  title: 'Dashboard/CustomizedDataGrid',
  component: CustomizedDataGrid,
};
export default meta;

export const Default: StoryObj<typeof CustomizedDataGrid> = {
  render: () => <CustomizedDataGrid />,
}; 