import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todoItem }) => {
  return (
    <Main key={todoItem.id}>
      <Container>
          <DetailButton>👀 내용보기</DetailButton>
        <Title>{todoItem.title}</Title>
        <p>{todoItem.content}</p>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
`;

const Container = styled.div`
  padding: 10px 15px;
  width: 290px;
  border: 3px solid #ced4da;
  border-radius: 10px;
`;

const DetailButton = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 15px;
`;

export default TodoItem;
