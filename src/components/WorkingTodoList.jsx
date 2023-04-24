import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos.js';
import { Container, Title, ListContainer } from '../styled/TodoListStyle';

const WorkingTodoList = () => {
  const todos = useSelector(state => state.todos);
  const workingTodos = todos.filter(todo => !todo.isDone);

  const dispatch = useDispatch();
  const onDeleteClick = (id) => dispatch(deleteTodo(id));
  const onToggleClick = (id) =>  dispatch(toggleStatusTodo(id));

  return (
    <Container>
      <Title>Working 🔥</Title>
      <ListContainer>
        {workingTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onDeleteClick={onDeleteClick}
            onToggleClick={onToggleClick}
          />
      ))}
      </ListContainer>
    </Container>
  );
};

export default WorkingTodoList;
