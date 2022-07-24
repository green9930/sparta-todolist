import styled from 'styled-components';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const { id, title, content, isDone } = todo;

  return (
    <StyledTodo>
      <h3>{title}</h3>
      <StyledContent>{content}</StyledContent>
      <BtnContainer>
        <StyledTodoBtn color="delete" onClick={() => removeTodo(id)}>
          삭제하기
        </StyledTodoBtn>
        {isDone ? (
          <StyledTodoBtn color="cancel" onClick={() => toggleTodo(id)}>
            취소
          </StyledTodoBtn>
        ) : (
          <StyledTodoBtn color="done" onClick={() => toggleTodo(id)}>
            완료
          </StyledTodoBtn>
        )}
      </BtnContainer>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  height: 180px;
`;

const StyledContent = styled.span`
  display: inline-block;
  margin: 20px 0;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledTodoBtn = styled.button`
  height: 40px;
  width: 45%;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  -moz-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;

  :hover,
  :focus {
    border: 2px solid
      ${({ color }) => {
        if (color === 'cancel') {
          return `#f10000`;
        } else if (color === 'done') {
          return `#008080`;
        } else {
          return 'transparent';
        }
      }};
    background-color: ${({ color }) =>
      color === 'delete' ? '#999999' : 'transparent'};
  }
`;

export default Todo;
