import Form from 'components/Form';
import Layout from 'components/layout/Layout';
import TodoList from 'components/TodoList';

function TodoListPage() {
  return (
    <Layout>
      <Form />
      <TodoList />
    </Layout>
  );
}

export default TodoListPage;
