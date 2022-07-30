import TodoDetailPage from 'pages/TodoDetailPage';
import TodoListPage from 'pages/TodoListPage';
import { Route, Routes } from 'react-router-dom';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/detail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;
