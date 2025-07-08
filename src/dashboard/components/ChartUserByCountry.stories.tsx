import type { Meta, StoryObj } from '@storybook/react';
import ChartUserByCountry from './ChartUserByCountry';

const meta: Meta<typeof ChartUserByCountry> = {
  title: 'Dashboard/ChartUserByCountry',
  component: ChartUserByCountry,
};
export default meta;

export const Default: StoryObj<typeof ChartUserByCountry> = {
  render: () => <ChartUserByCountry />,
}; 