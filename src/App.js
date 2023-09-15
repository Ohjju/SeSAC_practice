import GlobalStyle from "./components/GlobalStyle";
import Start from "./pages/Start";
import Mbti from "./pages/Mbti";
import Show from "./pages/Show";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      {/* 상단에 GlobalStyle 작성해 전체에 적용시켜줌 */}
      <GlobalStyle />
      {/* 이렇게 조건 안 걸면 처음 page=0이므로 mbti페이지에서 page-1이 작동안됨 */}
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
