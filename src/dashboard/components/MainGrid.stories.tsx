import type { Meta, StoryObj } from '@storybook/react';
import MainGrid from './MainGrid';

const meta: Meta<typeof MainGrid> = {
  title: 'Dashboard/MainGrid',
  component: MainGrid,
};
export default meta;

export const Default: StoryObj<typeof MainGrid> = {
  render: () => <MainGrid />,
}; 