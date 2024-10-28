import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  // 검색어를 저장할 state
  const [search, setSearch] = useState("");
  //현재 q값 불러옴, 새로고침해도 검색창에 남아있게 하기 위해
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  //검색창에 값이 들어오면 그 값을 setSeartch 함수에 넣음
  const onChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  //실행되면 페이지가 프로매틱하게 이동
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  // Enter 이벤트가 발생하였을때 onSubmit함수 실행
  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          className={style.searchbar_container_input}
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
        />
        <button
          className={style.searchbar_container_button}
          onClick={onSubmit}
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
}
