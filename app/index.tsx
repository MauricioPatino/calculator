import { Text, View, TextInput, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import { useState } from "react";

export default function Index() {

  const [display, setDisplay] = useState("0"); // Display value
  const [operand, setOperand] = useState<number | null>(null); // Stored operand
  const [operator, setOperator] = useState<string | null>(null); // Current operator

  // Handle number input
  const handleInput = (value: number) => {
    if(display === "Error" || display === 'NaN') {
      return display;
    }
    setDisplay((display) => (display === "0" ? value.toString() : display + value));
  };

  // Handle operator press
  const pressOperator = (op: string) => {
    setOperand(parseFloat(display)); // Store the first number
    setOperator(op); // Store operator
    setDisplay("0"); // Reset display for next number
  };

  // Perform calculation
  const calculate = () => {
    if (operator && operand !== null) {
      const num = parseFloat(display);
      let result: number | string;

      switch (operator) {
        case "+":
          result = operand + num;
          break;
        case "-":
          result = operand - num;
          break;
        case "*":
          result = operand * num;
          break;
        case "/":
          result = num === 0 ? "Error" : operand / num; // Prevent division by zero
          break;
        default:
          result = display;
      }

      setDisplay(result.toString());
      setOperand(null);
      setOperator(null);
    }
  };

  // Clear everything
  const clear = () => {
    setDisplay("0");
    setOperand(null);
    setOperator(null);
  };



  return (
    <View style={style.container}>
      <View style={style.row}>
            <Button
              title="1"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(1)}
            />
            <Button
              title="2"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(2)}
            />
            <Button
              title="3"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(3)}
            />
            <Button
              title="+"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => pressOperator('+')}
            />
      </View>
      <View style={style.row}>
            <Button
              title="4"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(4)}
            />
            <Button
              title="5"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(5)}
            />
            <Button
              title="6"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(6)}
            />
            <Button
              title="-"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => pressOperator('-')}
            />
      </View>
      <View style={style.row}>
            <Button
              title="7"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(7)}
            />
            <Button
              title="8"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(8)}
            />
            <Button
              title="9"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(9)}
            />
            <Button
              title="*"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => pressOperator('*')}
            />
      </View>
      <View style={style.row}>
            <Button
              title="0"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => handleInput(0)}
            />
            <Button
              title="C"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={clear}
            />
            <Button
              title="="
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => calculate()}
            />
            <Button
              title="/"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={style.buttonStyle}
              containerStyle={style.containerStyle}
              onPress={() => pressOperator('/')}
            />
      </View>
      <Text>Result: {display} </Text>
    </View>
  );
}

const style = StyleSheet.create({
      buttonStyle: {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
      },
      containerStyle: {
        width: 50,
        marginHorizontal: 20,
        marginVertical: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
      }
});