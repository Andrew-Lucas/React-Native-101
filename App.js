import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Vibration } from 'react-native'

export default function App() {
  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={styles.topContainer}>
        <Text style={styles.city}>Arusha</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.temperature}>27</Text>
        <Text style={styles.condition}>Sunny</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: "royalblue"
  },
  topContainer: {
/*     backgroundColor: "aqua", */
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  city:{
    fontSize: 35
  },
  bottomContainer: {
/*     backgroundColor: "yellowgreen", */
    flex: 2,
    alignItems: "center"
  },
  temperature: {
    fontSize: 125
  },
  condition: {
    marginTop: -25,
    fontWeight: 400,
    fontSize: 45
  }
})
