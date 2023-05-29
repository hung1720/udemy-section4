import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber){ // được tạo ra ở hàm này
    setUserNumber(pickedNumber) // set lại giá trị mặc định null khi được truyền vào 
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/> // onPickNumber tạo ra để nhận giá trị từ StartGameScreen.js 
  if(userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const newLocal = '#ffffff';
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
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
// Section 52 - Adding Visual Feedback to the Buttons: style cho button trong primaryButton.js
                                                    // android_ripple: tạo hiệu ứng gợn sóng cho button
                                                    // overFlow: làm cho các phần tử bên trong không bị tràn ra ngoài
                                                    // Tạo mảng để ios có thể nhận hiệu ứng trong primaryButton.js
// Section 53 - Improving the Buttons: Style đơn giản cho button hoàn chỉnh
// Section 54 - Coloring the componets & The Overall App: Ở section này đơn giản chỉ thêm màu nền cho background 
// Section 55 - Adding a linear Gradient: ở section này chúng ta cần cài npm i expo-linear-gradient 
                                        // Và tạo thẻ linearGradient, xem thêm trên doc expo
// Section 56 - Adding a Background Image: Thêm ImageBackground để đặt ảnh nền
                                        // source: Chèn thêm đường dẫn của hình ảnh
                                        // resizeMode: làm cho hình ảnh phóng to hoặc thu nhỏ phù hợp với kích thước 
                                        // imageStyle: chỉnh style của image
// Section 57 - Getting Started with the Game Logic: 
// Section 58 - Handling User Input & Showing an Alert Dialog: isNaN trả về một số có hợp lệ hay không
                                                            // Alert trong react native
// Section 59 - Switching Screens Programmatically: 
                                                // App.js
                                                // Tạo biến userNumber bằng null và setUserNumber để set lại biến userNumber 
                                                // Khi người dùng nhập số nếu thỏa điều kiện pickedNumberHandler sẽ lấy giá trị và 
                                                // hàm setUserNumber sẽ điều chỉnh userNumber
                                                // tiếp theo biến screen StartGameScreen tạo ra thuộc tính onPickNumber để StartGameScreen.js nhận giá trị
                                                // truyền vào hàm pickedNumberHandler trong thuộc tính onPickNumber
                                                // StartGameScreen.js
                                                // truyền hàm onPickNumber vào StartGameScreen và được gọi trong confirmInputHandler
                                                // để khi người dùng nhấn cofirm sẽ chuyển màn hình
// Section 60 - Starting Work on the Game Screen: 
