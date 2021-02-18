import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

//Redux Congif
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/config/redux'


const App = () => {

  const [item, handleItem] = useState('')
  const [list, handleList] = useState([])
  console.log("🚀 ~ file: App.js ~ line 15 ~ App ~ list", list)

  const setItem = () => {
    handleList([...list, item])
    handleItem('')
  }

  return <>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <View style={styles.mainContainer} >
          <Text> TODO LIST  </Text>
          <TextInput value={item} onChangeText={text => handleItem(text)} style={styles.input} />
          <Button title='Add List' onPress={setItem} />
          <View>
            {list.map((val, ind) => {
              if (!val.length) {
                return <Text key={ind} > NO DATA FOUND! </Text>
              }
              else {
                return <Text key={ind} > {val} </Text>
              }
            })}
          </View>
        </View>
      </PersistGate>
    </Provider>
  </>
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2
  }
})