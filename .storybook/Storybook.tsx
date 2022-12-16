import { getStorybookUI } from '@storybook/react-native';

import './storybook.requires';
import {useEffect} from "react";
import SplashScreen from "react-native-splash-screen";

const StorybookUI = getStorybookUI({});


const StorybookUIRoot = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return <StorybookUI/>
}

export default StorybookUIRoot;
