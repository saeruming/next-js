import { useRouter } from "next/router";
import { useMBTI } from "../context/MBTIContext";
import style from "./[step].module.css";
import { questions } from "../types/mbti";
import Image from "next/image";
import { jjanguFont2 } from "..";
import { useEffect, useState } from "react";
import LoadingBar from "../component/lodingbar";

export default function Page() {
  const router = useRouter();
  const { step } = router.query;
  const { addAnswer } = useMBTI();

  const questionIndex = parseInt(step as string) - 1;
  const currentQuestion = questions[questionIndex];

  //로딩 상태 관리, 뒤로가기 버튼 생성시 useState로 관리하기
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // 인덱스 변경될때 마다 진행률 업데이틔
    setLoading(
      ((questionIndex + 1) / questions.length) * 100
    );
  }, [questionIndex]);

  const handleAnswer = (answer: number) => {
    addAnswer(answer);
    const nextStep = questionIndex + 2;

    if (nextStep <= questions.length) {
      router.push(`/test/${nextStep}`);
    } else {
      router.push("/result");
    }
  };

  if (!currentQuestion) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <div className={style.container}>
      {<LoadingBar progress={loading} />}
      <h2>{currentQuestion.question}</h2>
      <Image
        className={style.img}
        src={currentQuestion.image}
        alt="짱구는 못말려"
        width={500}
        height={300}
      />
      <div className={style.button}>
        {currentQuestion.options.map((option, idx) => (
          <button
            className={jjanguFont2.className}
            key={idx}
            onClick={() => handleAnswer(option.value)}
          >
            <p className={style.buttonFont}>
              {option.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
