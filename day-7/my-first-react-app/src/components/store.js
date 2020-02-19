import { combineReducers, createStore } from "redux";
import countReducer from "./count-reducer";
import noteReducer from "./note-reducer";

const allReducers = combineReducers({
  countReducer: countReducer,
  noteState: noteReducer
});

export default createStore(allReducers);
