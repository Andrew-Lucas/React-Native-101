import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import Checkbox from 'expo-checkbox'

function Todos({ styles, todos, setTodos, saveTodos, working }) {
  async function changeChecked(key) {
    const allTodos = { ...todos }
    allTodos[key].done = !allTodos[key].done
    await saveTodos(allTodos)
  }
  async function editTodo(key) {
    if (Platform.OS === 'web') {
    } else {
      Alert.alert('Edit Todo', 'Are you sure you want to edit?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Edit',
          onPress: async () => {
            const allTodos = { ...todos }

            Alert.prompt(
              working ? 'Edit this task' : 'Edit location',
              '',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Save',
                  onPress: async (enteredText) => {
                    if (enteredText !== '') {
                      allTodos[key].text = enteredText
                      await saveTodos(allTodos)
                    }
                  },
                },
              ],
              'plain-text',
              `${allTodos[key].text}`
            )
          },
        },
      ])
    }
  }

  const deleteTodo = (key) => {
    if (Platform.OS === 'web') {
      const ok = confirm('Do you want to delete this todo?')
      if (ok) {
        const allTodos = { ...todos }
        delete allTodos[key]
        setTodos(allTodos)
        saveTodos(allTodos)
      }
    } else {
      Alert.alert('Delete Todo', 'Are you sure?', [
        { text: 'Cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const allTodos = { ...todos }
            delete allTodos[key]
            setTodos(allTodos)
            await saveTodos(allTodos)
          },
        },
      ])
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {Object.keys(todos).map((key) => {
        return todos[key].work === working ? (
          <View
            style={{
              ...styles.todoHolder,
              backgroundColor: todos[key].done ? 'royalblue' : '#202020',
            }}
            key={key}>
            <Checkbox
              style={styles.checkbox}
              value={todos[key].done}
              onValueChange={() => {
                changeChecked(key)
              }}
              color={todos[key].done ? 'rgb(37, 76, 193)' : undefined}
            />
            <Text
              style={{
                textDecorationLine: todos[key].done ? 'line-through' : null,
                color: todos[key].done ? 'gray' : 'white',
              }}>
              {todos[key].text}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ marginRight: '10%' }}
                onPress={() => editTodo(key)}>
                <Text
                  style={{
                    color: todos[key].done ? 'gray' : 'white',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity="0.5">
                <Text
                  onPress={() => deleteTodo(key)}
                  style={{
                    color: todos[key].done ? 'gray' : 'white',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null
      })}
    </ScrollView>
  )
}

export default Todos
