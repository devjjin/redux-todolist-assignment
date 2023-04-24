import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { Container, Title, ListContainer } from '../styled/TodoListStyle';

const DoneTodoList = () => {
  const todos = useSelector(state => state.todos);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <Container>
      <Title>Done 🎉</Title>
      <ListContainer>
          {doneTodos.map(todoItem => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
      </ListContainer>
    </Container>
  );
};

export default DoneTodoList;