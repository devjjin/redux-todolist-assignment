import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

export default WorkingTodoList;
