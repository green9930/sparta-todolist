import Todo from 'components/Todo';
import styled from 'styled-components';

const List = (props) => {
  const { todos, toggleTodo, removeTodo } = props;

  return (
    <ListContainer>
      <UlContainer>
        <SytledH2>Working...🔥</SytledH2>
        <StyledUl>
          {todos
            .filter((val) => !val.isDone)
            .map((todo) => {
              return (
                <StyledLi key={todo.id}>
                  <Todo
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                  />
                </StyledLi>
              );
            })}
        </StyledUl>
      </UlContainer>
      <UlContainer>
        <SytledH2>Done..! 👍</SytledH2>
        <StyledUl>
          {todos
            .filter((val) => val.isDone)
            .map((todo) => {
              return (
                <StyledLi key={todo.id}>
                  <Todo
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                  />
                </StyledLi>
              );
            })}
        </StyledUl>
      </UlContainer>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

const UlContainer = styled.div`
  min-height: 100px;
`;

const SytledH2 = styled.h2`
  margin: 0;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledLi = styled.li`
  margin: 0 15px 15px 0;
`;

export default List;
