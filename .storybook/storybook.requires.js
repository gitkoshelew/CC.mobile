/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return [
    require("../components/Button.stories.tsx"),
    require("../src/components/AddingAnswer/story/AddingAnswer.stories.tsx"),
    require("../src/components/Tabs/story/Tabs.stories.tsx"),
    require("../src/components/ui/AddButton/story/AddButton.stories.tsx"),
    require("../src/components/ui/CheckBox/story/CheckBox.stories.tsx"),
    require("../src/components/ui/CustomTextInput/story/CustomTextInput.stories.tsx"),
  ];
};

configure(getStories, module, false);
