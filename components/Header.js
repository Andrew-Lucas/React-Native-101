import { Text, TouchableOpacity, View } from 'react-native'

function Header({ styles, work, activeTab, travel }) {
  return (
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
  )
}

export default Header
