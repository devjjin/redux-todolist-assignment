import React from 'react';
import Layout from "../shared/Layout";
import TodoHeader from '../components/TodoHeader';

const Home = () => {
  return (
    <div>
      <Layout>
        <TodoHeader />
      </Layout>
    </div>
  );
};

export default Home;
