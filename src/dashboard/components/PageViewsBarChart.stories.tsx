import type { Meta, StoryObj } from '@storybook/react';
import PageViewsBarChart from './PageViewsBarChart';

const meta: Meta<typeof PageViewsBarChart> = {
  title: 'Dashboard/PageViewsBarChart',
  component: PageViewsBarChart,
};
export default meta;

export const Default: StoryObj<typeof PageViewsBarChart> = {
  render: () => <PageViewsBarChart />,
}; 