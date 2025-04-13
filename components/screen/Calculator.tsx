import { ScrollView } from "react-native"
import ButtonGrid from "../ui/Layout/LayoutButtons"
import CalculatorContainer from "../ui/Layout/LayoutContainer"
import CalculatorDisplay from "../ui/Layout/LayoutDisplay"
import CustomButton from '../ui/Button'
import Display from "../ui/Input"
import { useState } from "react"


export default function ScreenCalculator(){
    const [display, setDisplay]= useState("0");
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');

    function calculateExpression(expression: string): string {
        try {
          const evaluated = eval(expression.replace(",", "."));
          return String(evaluated);
        } catch {
          return "Erro";
        }
      }

      function clear() {
        setExpression('')
        setResult('0')
      }

    return(
        <CalculatorContainer>
            <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                <CalculatorDisplay>
                    <Display>{expression || "0"}</Display>
                </CalculatorDisplay>
                <ButtonGrid>
                    <CustomButton type={'action'} onPress={() => clear()}>AC</CustomButton>
                    <CustomButton type={'action'} onPress={() => ({})}>NuM</CustomButton>
                    <CustomButton type={'action'} onPress={() => setExpression(prev => prev + "%")}>%</CustomButton>
                    <CustomButton type={'operator'} onPress={() => setExpression(prev => prev + "/")}>/</CustomButton>
                </ButtonGrid>
                <ButtonGrid>
                    <CustomButton onPress={() => setExpression(prev => prev + "7")}>7</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "8")}>8</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "9")}>9</CustomButton>
                    <CustomButton type={'operator'} onPress={() => setExpression(prev => prev +  "*")}>X</CustomButton>
                </ButtonGrid>
                <ButtonGrid>
                    <CustomButton onPress={() => setExpression(prev => prev + "4")}>4</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "5")}>5</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "6")}>6</CustomButton>
                    <CustomButton type={'operator'} onPress={() => setExpression(prev => prev + "-")}>-</CustomButton>
                </ButtonGrid>
                <ButtonGrid>
                    <CustomButton onPress={() => setExpression(prev => prev + "1")}>1</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "2")}>2</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "3")}>3</CustomButton>
                    <CustomButton type={'operator'} onPress={() => setExpression(prev => prev + "+")}>+</CustomButton>
                </ButtonGrid> 
                <ButtonGrid>
                    <CustomButton type={'action'} onPress={() => ({})}>NuM</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + "0")}>0</CustomButton>
                    <CustomButton onPress={() => setExpression(prev => prev + ",")}>,</CustomButton>
                    <CustomButton type={'operator'} onPress={() => {const result = calculateExpression(expression);
                     setResult(result);
                     setExpression(result);}}>=</CustomButton>
                </ButtonGrid> 
            </ScrollView>
        </CalculatorContainer>
    )
}