import React from 'react';
import styled from 'styled-components';

const TodoHeader = () => {
  return (
    <Header>
      <h3>📒 My TodoList</h3>
    </Header>
  );
};

const Header = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
`;

export default TodoHeader;
