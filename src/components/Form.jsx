import { useRef, useState } from 'react';
import styled from 'styled-components';

const Form = ({ addTodo }) => {
  const nextId = useRef(0);

  const [todo, setTodo] = useState({
    id: (nextId.current += 1),
    title: '',
    content: '',
    isDone: false,
  });

  const onChangeInput = (e) => {
    console.log(e.target.name);
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();

    addTodo(todo);
    setTodo({
      title: '',
      content: '',
    });
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmitTodo}>
        <InputContainer>
          <div>
            <TodoLabel htmlFor="input-title">제목</TodoLabel>
            <TodoInput
              id="input-title"
              type="text"
              name="title"
              placeholder="제목을 입력해주세요(12자 이하)"
              maxLength={12}
              value={todo.title}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <TodoLabel htmlFor="input-content">내용</TodoLabel>
            <TodoInput
              id="input-content"
              type="text"
              name="content"
              placeholder="내용을 입력해주세요(16자 이하)"
              maxLength={16}
              value={todo.content}
              onChange={onChangeInput}
            />
          </div>
        </InputContainer>
        <TodoSubmitBtn type="submit">추가하기</TodoSubmitBtn>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  width: 100%;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  display: flex;
`;

const TodoLabel = styled.label`
  font-weight: 600;
  margin: 0 10px;
`;

const TodoInput = styled.input`
  padding: 10px 10px 10px;
  flex-grow: 1;
  min-width: 200px;
  border: 1px solid #a8a8a8;

  :hover,
  :focus {
    border: 1px solid #008080;
    outline: none;
  }
`;

const TodoSubmitBtn = styled.button`
  padding: 12px 40px;
  background-color: #008080;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  -moz-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;

  :hover,
  :focus {
    background-color: #ffffff;
    color: #008080;
  }
`;

export default Form;
