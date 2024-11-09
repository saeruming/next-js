import Link from "next/link";
import style from "./index.module.css";
import localFont from "next/font/local";

//최상위 스코프에 선언
const jjanguFont = localFont({
  src: [
    {
      path: "./fonts/font.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

const jjanguFont2 = localFont({
  src: [
    {
      path: "./fonts/startF.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});
export default function Home() {
  const textStyles = [
    {
      text: "짱",
      color: "red",
      fontSize: "4.5rem",
      rotate: "-5deg",
    },
    {
      text: "구",
      color: "green",
      fontSize: "2.5rem",
      rotate: "10deg",
    },
    {
      text: "야",
      color: "blue",
      fontSize: "2.5rem",
      rotate: "10deg",
    },
    {
      text: "놀",
      color: "red",
      fontSize: "4.5rem",
      rotate: "-5deg",
    },
    {
      text: "자",
      color: "yellow",
      fontSize: "2.5rem",
      rotate: "10deg",
    },
    {
      text: "~",
      color: "green",
      fontSize: "4.5rem",
      rotate: "10deg",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.text}>
        {textStyles.map((style, index) => (
          <span
            key={index}
            className={jjanguFont.className}
            style={{
              color: style.color,
              fontSize: style.fontSize,
              transform: `rotate(${style.rotate})`,
              display: "inline-block",
              marginRight: "3px",
            }}
          >
            {style.text}
          </span>
        ))}
        <h3>짱구 등장인물로 알아보는 MBTI 테스트</h3>
      </div>
      <div className={style.image}>
        <img src="MainImage.jpg" alt="짱구" />
      </div>
      <div className={style.start}>
        <div className={jjanguFont2.className}>
          <Link className={style.startLink} href={"/test"}>
            시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}
