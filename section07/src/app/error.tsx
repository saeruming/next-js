"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div>
      <h3>에러가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // (비동기 함수)현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴
            reset(); // 에러 상태를 초기화하고, 컴포넌트들을 다시 렌더링})
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
