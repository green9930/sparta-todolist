import Layout from 'components/Layout';
import styled from 'styled-components';

function TodoList() {
  return (
    <TodoListContainer>
      <Layout />
    </TodoListContainer>
  );
}

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -10px;
`;

export default TodoList;
