import React, {useEffect} from "react";
import './storybook.requires';
import SplashScreen from "react-native-splash-screen";
import {getStorybookUI} from "@storybook/react-native";

const StorybookUI = getStorybookUI({});


const StorybookUIRoot = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return <StorybookUI/>
}

export default StorybookUIRoot;
