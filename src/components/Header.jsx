import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <StyledH1>My Todo List</StyledH1>
      <StyledH2>React</StyledH2>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #dddddd;
  width: 100%;
  box-sizing: border-box;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export default Header;
