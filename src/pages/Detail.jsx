import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import styled from 'styled-components';
import GlobalStyle from '../styled/GlobalStyle';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todoItem = useSelector(state => state.todos.find(todo => todo.id === id));

  if (!todoItem) {
    return <NotFound />;
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Container>
          <Header>
            <p>ID: {todoItem.id}</p>
            <BackButton onClick={() => navigate('/')}>이전으로</BackButton>
          </Header>
          <div>
            <h1>{todoItem.title}</h1>
            <p>{todoItem.content}</p>
          </div>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 40%;
  height: 50%;
  padding: 20px 30px;
  border: 2px solid #ced4da;
  border-radius: 10px;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background-color: #adb5bd;
  border: none;
  padding: 10px;
  color: white;
`;

export default Detail;
