import {Button} from 'react-native';
import React from 'react';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
};

export const Basic = (args: any) => <Button {...args} />;
