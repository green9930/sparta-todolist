import Form from 'components/Form';
import Layout from 'components/layout/Layout';
import TodoList from 'components/TodoList';
// import { useSelector } from 'react-redux';

function TodoListPage() {
  // const todolist = useSelector((state) => state.todos);

  return (
    <Layout>
      <Form />
      <TodoList />
    </Layout>
  );
}

export default TodoListPage;
