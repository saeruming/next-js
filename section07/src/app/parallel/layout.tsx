import Link from "next/link";
import { ReactNode } from "react";
export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      <div></div>
      <Link href={"/parallel"}>패럴랠</Link>
      &nbsp;
      <Link href={"/parallel/setting"}>
        parallel/setting
      </Link>
      <div>
        {sidebar}
        {feed}
        {children}
      </div>
    </div>
  );
}
