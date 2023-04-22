import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const TodoCreate = () => {
  const dispatch = useDispatch();
  const initialValue = { id: uuidv4(), title: '', content: '', isDone: false };
  const [todoItem, setTodoItem] = useState(initialValue);

  const onChangeHandler = e => setTodoItem({ ...todoItem, [e.target.id]: e.target.value });

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      ...todoItem,
    };
    dispatch(addTodo(newTodo));
    setTodoItem(initialValue);
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label htmlFor="title">할일</Label>
          <Input type="text" id="title" value={todoItem.title} onChange={onChangeHandler}></Input>
          <Label htmlFor="content">내용</Label>
          <Input type="text" id="content" value={todoItem.content} onChange={onChangeHandler}></Input>
        </FormGroup>
        <SubmitButton type="submit">추가하기</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f1f3f5;
  border-radius: 10px;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 15px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const SubmitButton = styled.button`
  background-color: #adb5bd;
  color: white;
`;
export default TodoCreate;
