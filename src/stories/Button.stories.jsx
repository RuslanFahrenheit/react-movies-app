import React from 'react';

import { Button } from '../components/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button',
};

export const SpanButtonWithAdditionalClass = Template.bind({});
SpanButtonWithAdditionalClass.args = {
  component: 'span',
  type: '',
  additionalClass: 'additional',
  children: 'Button',
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  variant: 'primary',
  children: 'Click Me!',
};
