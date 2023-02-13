import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
/* import { Fontisto } from '@expo/vector-icons' */
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {
  const [working, setWorking] = useState(true)
  const [text, setText] = useState('')
  function work() {
    setWorking(true)
    setText('')
  }
  function travel() {
    setWorking(false)
    setText('')
  }
  const activeTab = (arg1, arg2) => {
    return working ? arg1 : arg2
  }
  const onChangeText = (event) => {
    setText(event)
  }

  const [todos, setTodos] = useState({})
  const submitTodo = async () => {
    if (text === '') {
      return
    }
    const newTodos = Object.assign({}, todos, {
      [Date.now()]: { text, work: working },
    })
    setTodos(newTodos)
    await saveTodos(newTodos)
    setText('')
  }
  console.log(todos)
  const saveTodos = async (toSave) => {
    await AsyncStorage.setItem('todos', JSON.stringify(toSave))
  }
  let loadedTodos
  async function loadTodos() {
    const savedTodos = await AsyncStorage.getItem('todos')
    loadedTodos = JSON.parse(savedTodos)
    setTodos(loadedTodos)
  }
  useEffect(async () => {
    await loadTodos()
  }, [])

  const deleteTodo = (key) => {
    console.log(key)
    Alert.alert('Delete Todo', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: async () => {
          const allTodos = { ...todos }
          delete allTodos[key]
          setTodos(allTodos)
          await saveTodos(allTodos)
        },
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.tabsText,
              color: activeTab('white', 'gray'),
              textDecorationLine: activeTab('underline', 'none'),
            }}>
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.tabsText,
              color: activeTab('gray', 'white'),
              textDecorationLine: activeTab('none', 'underline'),
            }}>
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={submitTodo}
        value={text}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={
          working ? 'Write your work list' : 'Write your travel list'
        }></TextInput>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {Object.keys(todos).map((key) =>
          todos[key].work === working ? (
            <View style={styles.todoHolder} key={key}>
              <Text style={styles.todoText}>{todos[key].text}</Text>
              <TouchableOpacity activeOpacity="0.5">
                <Text onPress={() => deleteTodo(key)} style={styles.todoText}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 100,
    width: SCREEN_WIDTH,
    justifyContent: 'space-between',
  },
  tabsText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  textInput: {
    maxHeight: 100,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  scrollView: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingHorizontal: 15,
    gap: 50,
  },
  todoHolder: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#202020',
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  todoText: {
    color: 'white',
  },
})
