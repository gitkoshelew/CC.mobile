import {Button} from 'react-native';
import React from 'react';
import {ComponentStory} from '@storybook/react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
};

export const Basic: ComponentStory<typeof Button> = args => <Button {...args} />;
