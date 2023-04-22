import React from 'react';
import Layout from "../shared/Layout";
import TodoHeader from '../components/TodoHeader';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div>
      <Layout>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </Layout>
    </div>
  );
};

export default Home;
