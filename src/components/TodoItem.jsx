import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoItem = ({ todoItem, onDeleteClick, onToggleClick }) => {
  return (
    <Main key={todoItem.id}>
      <Container>
        <StLink to={`${todoItem.id}`}>
          <DetailButton>👀 내용보기</DetailButton>
        </StLink>
        <Title>{todoItem.title}</Title>
        <p>{todoItem.content}</p>
        <ButtonContainer>
          <DeleteButton onClick={() => onDeleteClick(todoItem.id)}>삭제하기</DeleteButton>
          <ToggleButton onClick={() => onToggleClick(todoItem.id)} isDone={todoItem.isDone}>
            {!todoItem.isDone ? '완료' : '취소'}
          </ToggleButton>
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  margin: 12px 0;
  gap: 10px;
`;

const StLink = styled(Link)`
  font-weight: bold;
  color: #1864ab;
`;
const DeleteButton = styled.button`
  border: 2px solid #e03131;
  color: black;
`;

const ToggleButton = styled.button`
  border: 2px solid ${props => (!props.isDone ? '#099268' : '#ced4da')};
  color: black;
`;

export default TodoItem;
