import React from "react";
import { TouchableOpacity, Text } from "react-native"
import styles from "./styles"

type NumberOperationProps = {
    children: React.ReactNode;
    onPress:() => void;
    type?: 'number' | 'operator' | 'action';
} 

export default function CustomButton ({ 
    children, 
    onPress, 
    type= 'number' }: NumberOperationProps){
    return(
        <TouchableOpacity style={[styles.button, styles[type]]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

