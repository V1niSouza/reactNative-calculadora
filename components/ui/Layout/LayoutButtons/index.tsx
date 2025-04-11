import React from "react";
import { View } from "react-native";
import styles from "./styles"

type LayoutButtonsProps = {
    children: React.ReactNode;
};

export default function LayoutButtons({
    children
}: LayoutButtonsProps){
    return(
        <View style={[styles.row]}>{children}</View>
    )
}