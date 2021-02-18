import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' //manage async request
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist' //PR local storage my jo data hota hy wo dalty hain
import reducer from '../redux/reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const middleWare = [thunk]

const store = createStore(persistedReducer, {}, compose(
    applyMiddleware(...middleWare
        )
))

const persistor = persistStore(store, {})

export {
    store,
    persistor
}