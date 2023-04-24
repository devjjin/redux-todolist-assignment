import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title, ListContainer } from '../styled/TodoListStyle';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos.js';

const DoneTodoList = () => {
  const todos = useSelector(state => state.todos);
  const doneTodos = todos.filter(todo => todo.isDone);

  const dispatch = useDispatch();
  const onDeleteClick = (id) => dispatch(deleteTodo(id));
  const onToggleClick = (id) =>  dispatch(toggleStatusTodo(id));
  
  return (
    <Container>
      <Title>Done 🎉</Title>
      <ListContainer>
          {doneTodos.map(todoItem => (
            <TodoItem
              key={todoItem.id} t
              todoItem={todoItem}
              onDeleteClick={onDeleteClick}
              onToggleClick={onToggleClick}/>
          ))}
      </ListContainer>
    </Container>
  );
};

export default DoneTodoList;