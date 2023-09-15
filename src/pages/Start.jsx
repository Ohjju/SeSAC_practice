import styled from "styled-components";
import YellowButton from "../components/YellowButton";
import { useDispatch } from "react-redux";
import { next } from "../store/modules/mbti";

export default function Start() {
  const MainImg = styled.img`
    width: inherit;
  `;
  const Header = styled.p`
    font-size: 3rem;
  `;
  const SubHeader = styled.p`
    font-size: 1.5rem;
    color: #777;
  `;

  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      {/* process.env.PUBLIC_URL 이렇게 하면 경로 좀 더 안전함 */}
      <MainImg
        src={process.env.PUBLIC_URL + "/assets/main.jpg"}
        alt="메인페이지 이미지"
      />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다!
      </SubHeader>
      {/* props의 child에 글씨가 들어가므로 text에 글씨 넣어주기 */}
      {/* <YellowButton href="#">테스트 시작!</YellowButton> */}
      <YellowButton
        href="#"
        text="테스트 시작!"
        // next import해줘야 함
        // clickEvent={() => dispatch({type:"mbti/NEXT"})}와 같은데 mbti.js에서 next()라고 함수로 만들어주었으므로 불러오기
        clickEvent={() => dispatch(next())}
      ></YellowButton>
    </>
  );
}
