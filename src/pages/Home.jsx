import React from 'react';
import Layout from "../shared/Layout";
import TodoHeader from '../components/TodoHeader';
import TodoCreate from '../components/TodoCreate';
import WorkingTodoList from '../components/WorkingTodoList';
import DoneTodoList from '../components/DoneTodoList';

const Home = () => {
  return (
    <div>
      <Layout>
        <TodoHeader />
        <TodoCreate />
        <WorkingTodoList />
        <DoneTodoList />
      </Layout>
    </div>
  );
};

export default Home;
