import { Text, View, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native Application
      </Text>

      <Text style={styles.eventDate}>
        Friday, 4 Nov. 2022
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#130114',
    padding: 30
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 45
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 15,
  }
});