import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { Container, Title, ListContainer } from '../styled/TodoListStyle';

const WorkingTodoList = () => {
  const todos = useSelector(state => state.todos);
  const workingTodos = todos.filter(todo => !todo.isDone);

  return (
    <Container>
      <Title>Working 🔥</Title>
      <ListContainer>
        {workingTodos.map(todoItem => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default WorkingTodoList;
