import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { Metadata } from "next";

//static-page
async function AllBooks() {
  //모든 도서 데이터 불러오기
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  //예외처리
  if (!response.ok) {
    return <div>오류가 발생하였습니다 ..</div>;
  }
  //만들어 놓은 BookData로 allBooks의 타입을 정의
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  //추천 도서 데이터 불러오기
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  //예외처리
  if (!response.ok) {
    return <div>오류가 발생하였습니다 ..</div>;
  }
  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// 앱 라우터에서는 metadata 사용하여 페이지 컴포넌트 / 레이아웃 컴포넌트에서 내보내줌으로써 자동으로 설정됨.
export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입 북스에 등록된 도서를 만나보세요.",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스에 등록된 도서를 만나보세요.",
    images: ["thumbnail.png"],
  },
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
