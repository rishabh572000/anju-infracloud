import { combineReducers } from "redux";
import reducer from "./Reducer";

const RootReducer = combineReducers({
    user:reducer
})
export default RootReducer;