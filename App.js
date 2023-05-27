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
// Section 49 - Styling for Android & IOS: Custom cho 2 primary button trong startGameScreen
            // Tạo boxshadow nhưng trong react native không hỗ trợ
            // Elevation tạo độ bóng trong android
            // ShadowColor, Offset, Opacity, Radius độ bóng trong IOS
// Section 50 - Styling the "Number Input" Element: maxLength giới hạn kí tự nhập vào của textInput
// Section 51 - Configuring the TextInput Field: Thêm keyboardType trong textInput để nhập số 
                                              // autoCapitalize: Tự động điều khiển văn bản sẽ viết hoa
                                              // autoCorrect: Tự động sửa lỗi chính tả thường khi nhập email

