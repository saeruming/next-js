import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { BookData } from "@/type";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  //검색 결과를 불러올 함수
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  //클라이언트에서 백엔드 서버로 데이터를 직접 요청
  //검색어인 q가 변경이 되었을때, 현재 검색어가 있다면 검색결과를 불러오는 로직이 실행됨
  useEffect(() => {
    if (q) {
      //검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta
          property="og:title"
          content="한입북스 - 검색결과"
        />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
//
