import type { Meta, StoryObj } from '@storybook/react';
import SessionsChart from './SessionsChart';

const meta: Meta<typeof SessionsChart> = {
  title: 'Dashboard/SessionsChart',
  component: SessionsChart,
};
export default meta;

export const Default: StoryObj<typeof SessionsChart> = {
  render: () => <SessionsChart />,
}; 