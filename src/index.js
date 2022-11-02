import './styles.css'
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrementAC, decrementAC, incrementAC} from "./redux/actions";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// function logger(state) {
//     return function(next) {
//         return function(action) {
//             console.log('State:', state)
//             console.log('Action:', action)
//             return next(action)
//         }
//     }
// }

const store = createStore(rootReducer, 0, applyMiddleware(thunk))

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state
})

store.dispatch({type: 'INIT_APPLICATION'})

addBtn.addEventListener('click', () => {
    store.dispatch(incrementAC())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrementAC())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrementAC())
})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})
