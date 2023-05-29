import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({onPickNumber}) { // OnPickNumber được tạo trong App.js
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) { // enteredText biến được tạo lần đầu trong hàm này
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() { // reset lại giá trị hàng đầu 
        setEnteredNumber('')
    }
    function confirmInputHandler() { // Hàm này kiểm soát giá trị đầu vào
        const choseNumber = parseInt(enteredNumber) // Giá trị có tên enteredNumber được set trong useState và để đổi số nhập vào chắc chắn là số
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(choseNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}    //numberInput
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber} // Giá trị có tên enteredNumber được set trong useState và được gán vào attribute value
                onChangeText={numberInputHandler} // Function có tên numberInputHandler được tạo ở trên gán vào attribute onchangeText
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Cofirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, // android
        shadowColor: 'black', // ios
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})