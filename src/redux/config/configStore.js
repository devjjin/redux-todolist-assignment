import { createStore } from "redux"; 
import { combineReducers } from "redux";
import todos from "../modules/todos";

// combineReducers 여러개의 리듀서를 하나의 루트 리듀서로 결합함
const rootReducer = combineReducers({
    todos,
});

// 새로운 redux 스토어(전역 라이브러리 관리 스토어) 생성
const store = createStore(rootReducer);

// 다른 컴포넌트들에서도 사용할 수 있도록
export default store;