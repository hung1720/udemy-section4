import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <StartGameScreen />
  );
}

const styles = StyleSheet.create({

});

// 1. Tạo ra 2 folders components và screens
// 2. Folders screens sẽ chứa các màn hình ( StartGameScreen, GameScreen, GameOverScreen)
// + StartGameScreen màn hình đầu tiên đoán, và bắt đầu trờ chơi
// + GameOverScreen màn hình khi trờ chơi kết thúc
// 3. StartGameScreen - function StartGameScreen()
// Section 47 - Setting Up our Screen Components: Mình đã tạo thêm được một vùng View trong StartGameScreen là có 2 thuộc tính là TextInput và BUTTON
// Section 48 - Creating  Custom Buttons: Mình tạo một file PrimaryButton.js trong components và function PrimaryButton có trong nó
            // import PrimaryButton vào StartGameScreen để tạo ra 2 button là cofirm và reset
            // Từ đó import StartGameScreen vào App.js
