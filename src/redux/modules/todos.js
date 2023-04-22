const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

export const addTodo = todo => ({ type: ADD_TODO, todo });
export const toggleStatusTodo = todo => ({ type: TOGGLE_STATUS_TODO, todo });
export const deleteTodo = todo => ({ type: DELETE_TODO, todo });

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.todo);
    case TOGGLE_STATUS_TODO:
      return state.map(todo => (todo.id === action.todo ? { ...todo, isDone: !todo.isDone } : todo));
    default:
      return state;
  }
};

export default todos;
