import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const workingTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <Container>
      <Title>Working 🔥</Title>
      <ListContainer>
          {workingTodos.map(todoItem => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
      </ListContainer>
      <Title>Done 🎉</Title>
      <ListContainer>
          {doneTodos.map(todoItem => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default TodoList;
