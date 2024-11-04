import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";
import Head from "next/head";
//
//사전 렌더링을 위한 1.경로 설정하기
export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } }, //url 파라미터값은 무조건 문자열로만 명시(문법상)
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    //fallback: false, //없는 경로로 요청시 404 Not Found 반환
    //fallback: "blocking",//요청 받은 페이지가 존재하지 않을경우 마치 SSR 방식처럼 즉각적으로 페이지를 생성해서 return
    fallback: true, // SSR 방식 + 데이터가 없는 폴백 상태의 페이지부터 반환, 데이터는 후속으로 나중에 반환
  };
};

//SSG 방식
export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params!.id;
  //string 형태의 id를 Number타입으로 변환
  const book = await fetchOneBook(Number(id));

  if (!book) {
    return { notFound: true };
  }

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //fallback 상태일 때 로딩중 표출
  const router = useRouter();

  //Fallback 상태일때
  if (router.isFallback)
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta
            property="og:image"
            content="/thumbnail.png"
          />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입 북스에 등록된 도서들을 만나보세요."
          />
        </Head>
        <div>로딩중입니다</div>
      </>
    );

  if (!book)
    return "문제가 발생하였습니다. 다시 시도해주세요.";

  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{
            backgroundImage: `url('${coverImgUrl}')`,
          }}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
    </>
  );
}
