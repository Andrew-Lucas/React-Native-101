import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
/* import { Fontisto } from '@expo/vector-icons' */
import { StyleSheet, Dimensions, View, TextInput } from 'react-native'
import Header from './components/Header'
import Todos from './components/Todos'

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
  const submitTodo = () => {
    if (text === '') {
      return
    }
    const newTodos = Object.assign({}, todos, {
      [Date.now()]: { text, work: working, done: false },
    })
    saveTodos(newTodos)
    setText('')
  }

  const saveTodos = async (toSave) => {
    await AsyncStorage.setItem('todos', JSON.stringify(toSave))
  }

  let loadedTodos
  async function loadTodos() {
    const savedTodos = await AsyncStorage.getItem('todos')
    if (savedTodos) {
      loadedTodos = JSON.parse(savedTodos)
      setTodos(loadedTodos)
    }
  }

  useEffect(() => {
    loadTodos()
  }, [todos])

  return (
    <View style={styles.container}>
      <Header
        styles={styles}
        work={work}
        activeTab={activeTab}
        travel={travel}
      />
      <TextInput
        returnKeyType="done"
        onSubmitEditing={submitTodo}
        value={text}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={
          working ? 'Write your work list' : 'Write your travel list'
        }></TextInput>
      <Todos
        styles={styles}
        todos={todos}
        setTodos={setTodos}
        working={working}
        saveTodos={saveTodos}
      />
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
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 10,
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
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 5,
  },
})
