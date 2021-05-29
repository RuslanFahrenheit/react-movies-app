import React from 'react';

import { Heading } from '../components/heading';

export default {
  title: 'Example/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const HeadingExample = Template.bind({});
HeadingExample.args = {
  level: 'h1',
  title: 'Heading',
};
