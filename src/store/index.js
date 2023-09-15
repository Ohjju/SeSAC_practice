//modules에 있는 것들 합쳐줌
import { combineReducers } from "redux";
import { mbti } from "./modules/mbti";

export default combineReducers({ mbti });
// combineReducer가 함수여서 function 안 붙임
