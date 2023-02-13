import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Vibration,
  ScrollView,
  ActivityIndicator,
} from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const icons = {
  "Clouds": 'cloudy',
  "Cloudy": 'cloudy',
  "Partly cloudy": 'cloudy',
  "Clear": 'day-sunny',
  "Rain": 'rain',
  'Patchy rain possible': 'day-rain',
  "Fog": 'fog',
  "Sunny": 'day-sunny',
  "Overcast": 'day-cloudy',
  "Snow": 'snowflake-1',
}

export default function App() {
  const [city, setCity] = useState('Loading...')
  const [allowed, setAllowed] = useState(true)
  const [days, setDays] = useState([])

  const API_KEY = '144953d338544bcb88d91418231002'
  /*  */
  const permission = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync()
    if (!granted) {
      setAllowed(false)
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    console.log(latitude, longitude)
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    )

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7`
    )
    const responseJson = await response.json()
    setDays(responseJson.forecast.forecastday)
    const { city: fetchedCity } = location[0]
    setCity(fetchedCity)
  }

  useEffect(() => {
    permission()
  }, [])
  return (
    <>
      {allowed ? (
        <View style={styles.main}>
          <View style={styles.topContainer}>
            <Text style={styles.city}>{city}</Text>
          </View>

          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bottomContainer}>
            {days.length === 0 ? (
              <View style={styles.weatherContainer}>
                <ActivityIndicator size="large" color="white" />
              </View>
            ) : (
              days.map((day, index) => (
                <View key={index} style={styles.weatherContainer}>
                  <Text style={styles.date}>{day.date}</Text>
                  <View style={styles.tempIconHolder}>
                    <Text style={styles.temperature}>
                      {day.day.avgtemp_c}&deg;c
                    </Text>
                    <Fontisto
                      name={icons[day.day.condition.text]}
                      size={65}
                      color="black"
                    />
                  </View>
                  <Text style={styles.condition}>{day.day.condition.text}</Text>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.notAllowedHolder}>
          <Text style={styles.notAllowedTxt}>
            Sorry We could not access the weather
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    fontSize: 50,
    fontWeight: '500',
  },
  bottomContainer: {},
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  date: {
    fontSize: 25,
    fontWeight: '500',
  },
  tempIconHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 100,
    fontWeight: '600',
    marginRight: '7%',
  },
  condition: {
    marginTop: -15,
    marginLeft: -15,
    fontWeight: '400',
    fontSize: 40,
    width: '80%',
    textAlign: 'center',
  },
  notAllowedHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
  },
  notAllowedTxt: {
    fontSize: 50,
    width: '85%',
    textAlign: 'center',
  },
})
