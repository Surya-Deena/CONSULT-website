import {addItems,counts} from "./addItem";
import { combineReducers } from "redux";

 const rootReducers=combineReducers({
    addItems,
    counts
});

 export default rootReducers;