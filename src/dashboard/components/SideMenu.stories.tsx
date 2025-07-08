import type { Meta, StoryObj } from '@storybook/react';
import SideMenu from './SideMenu';

const meta: Meta<typeof SideMenu> = {
  title: 'Dashboard/SideMenu',
  component: SideMenu,
};
export default meta;

export const Default: StoryObj<typeof SideMenu> = {
  render: () => <SideMenu />,
}; 