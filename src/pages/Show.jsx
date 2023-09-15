import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PinkButton from "../components/PinkButton";
import { reset } from "../store/modules/mbti";

export default function Show() {
  const Header = styled.p`
    font-size: 3rem;
  `;
  const Explaination = styled.p`
    font-size: 1.5rem;
    color: #777;
  `;
  const Result = styled.p`
    font-size: 3rem;
    color: dodgerblue;
  `;
  const Additional = styled.p`
    font-size: 2rem;
    color: orange;
  `;
  const Img = styled.img`
    width: 500px;
    transform: translateX(-35px);
  `;

  const mbtiResult = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector(
    (state) => state.mbti.explanations[mbtiResult]
  );
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explanation.text}</Explaination>
      <Result>{mbtiResult}</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <Img src={process.env.PUBLIC_URL + explanation.img} alt="팩폭" />
      <PinkButton
        text={"다시 검사하기"}
        clickEvent={() => {
          dispatch(reset());
        }}
      />
    </>
  );
}
