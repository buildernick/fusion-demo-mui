import type { Meta, StoryObj } from '@storybook/react';
import HighlightedCard from './HighlightedCard';

const meta: Meta<typeof HighlightedCard> = {
  title: 'Dashboard/HighlightedCard',
  component: HighlightedCard,
};
export default meta;

export const Default: StoryObj<typeof HighlightedCard> = {
  render: () => <HighlightedCard />,
}; 