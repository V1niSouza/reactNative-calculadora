import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
type DisplayProps = {
    children: React.ReactNode;
}

export default function Display({
    children } : DisplayProps ){
        return(
            <View style={[styles.view]}>
                <Text style={[styles.text]}>Resultado:{children}</Text>
            </View>
        )
    }
