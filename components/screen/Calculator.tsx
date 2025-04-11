import { Image, ScrollView, Text, View, TextInput } from "react-native"
import CustomButton from "../ui/Button"

export default function ScreenCalculator(){
    return(
        <ScrollView>
            <Text>Tela Screen Calculadora</Text>
            <CustomButton onPress={() => console.log("Pressionou 7")}>{'7'}</CustomButton>
        </ScrollView>
    )
}