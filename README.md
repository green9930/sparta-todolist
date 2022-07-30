# TodoList with Redux

## 폴더 구조

📦src
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Todo.jsx
 ┃ ┣ 📜TodoDetail.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂pages
 ┃ ┣ 📜TodoDetailPage.jsx
 ┃ ┗ 📜TodoListPage.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂router
 ┃ ┗ 📜todoRouter.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📜App.js
 ┗ 📜index.js

## react-router 구조

```js
<Routes>
  <Route path="/" element={<TodoListPage />} />
  <Route path="/detail/:id" element={<TodoDetailPage />} />
</Routes>
```

## 컴포넌트 구조

### TodoListPage, TodoDetailPage

TodoListPage.js  

```js
<Layout>
  <Form />
  <TodoList />
</Layout>
```

TodoDetailPage.js  

```js
<Layout>
  <TodoDetailContainer>
    <TodoDetail todoItem={todoItem} />
    <StyledMoveBtn onClick={() => navigate('/')}>
      Go to Todo List
    </StyledMoveBtn>
  </TodoDetailContainer>
</Layout>
```

Layout.js

```js
<LayoutContainer>
  <Header />
  {props.children}
</LayoutContainer>
```

- Header는 동일하고 TodoListPage는 입력창과 TodoList, TodoDetailPage은 선택한 todo가 필요하므로 `Layout.js` 로 Header 이외의 각자 컴포넌트 props를 전달한다.  

### TodoList

TodoList.js

```js
<ListContainer>
  <UlContainer>
    <h2>Working...🔥</h2>
    <StyledUl>
      {todolist
        .filter((val) => !val.isDone)
        .map((todo) => {
          return (
            <StyledLi key={todo.id}>
              <Todo todo={todo} />
            </StyledLi>
          );
        })}
    </StyledUl>
  </UlContainer>
  <UlContainer>
    <h2>Done..! 👍</h2>
    <StyledUl>
      {todolist
        .filter((val) => val.isDone)
        .map((todo) => {
          return (
            <StyledLi key={todo.id}>
              <Todo todo={todo} />
            </StyledLi>
          );
        })}
    </StyledUl>
  </UlContainer>
</ListContainer>
```

- TodoList의 경우, todolist 배열을 받아서 반복문을 통해 todo 목록을 보여주어야 한다. Working/Done 목록에서 카드 UI를 생성하는 Todo 컴포넌트를 재사용할뿐만 아니라 코드 가독성과 컴포넌트의 명확한 역할 구분을 위해 Todo 컴포넌트를 분리하고 map 함수를 사용한다.

### TodoDetail

TodoDetailPage.js

```js
<Layout>
  <TodoDetailContainer>
    <TodoDetail todoItem={todoItem} />
    <StyledMoveBtn onClick={() => navigate('/')}>
      Go to Todo List
    </StyledMoveBtn>
  </TodoDetailContainer>
</Layout>
```

TodoDetail.js

```js
<TodoDetailContainer isDone={isDone}>
  <div>
    <span>(Todo No.</span>
    <span>{id})</span>
  </div>
  <h2>{title}</h2>
  <p>{content}</p>
</TodoDetailContainer>
```

- `Go to Todo List` 버튼은 특정 페이지가 아니라 전체 페이지로 돌아가는 기능이므로 TodoDetail 내용에 들어갈 필요가 없고 페이지에 존재하는 것이 페이지와 내부 컴포넌트 사이에 더 명확한 역할 구분일 것이라고 생각해 TodoDetail 컴포넌트가 아닌 페이지 컴포넌트에 삽입했다.