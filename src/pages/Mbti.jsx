import { useSelector } from "react-redux";
import SkyBlueButton from "../components/SkyBlueButton";
import { useDispatch } from "react-redux";
import { next } from "../store/modules/mbti";
import { check } from "../store/modules/mbti";
import styled from "styled-components";
import Progress from "../components/Progress";

const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              {/* 어느 버튼을 눌러도 다음페이지로 넘어감 */}
              <SkyBlueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && (
                <p style={{ fontSize: "2rem", paddingTop: "1.5rem" }}>VS</p>
              )}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
