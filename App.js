import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 1. Tạo ra 2 folders components và screens
// 2. Folders screens sẽ chứa các màn hình ( StartGameScreen, GameScreen, GameOverScreen)
// + StartGameScreen màn hình đầu tiên đoán, và bắt đầu trờ chơi
// + GameOverScreen màn hình khi trờ chơi kết thúc
// 3. StartGameScreen - function StartGameScreen()