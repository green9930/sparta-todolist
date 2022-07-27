import { useState } from 'react';
import Header from 'components/Header';
import Form from 'components/Form';
import List from 'components/List';
import styled from 'styled-components';

const Layout = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log('todo', todo);
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log('ADD TODO');
  };

  const removeTodo = (id) => {
    const arr = [...todos].filter((todo) => todo.id !== id);
    setTodos(arr);
    console.log('REMOVE TODO');
  };

  const toggleTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    });
    setTodos(updateTodos);
    console.log('UPDATE TODO');
  };

  console.log(todos);
  return (
    <LayoutContainer>
      <Header />
      <Form addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
