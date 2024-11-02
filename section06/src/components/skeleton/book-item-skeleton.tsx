import style from "./book-item-skeleton.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, {
  SkeletonTheme,
} from "react-loading-skeleton";

export default function BookItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.cover_img}> </div>
      <div className={style.info_container}>
        <div className={style.title}></div>
        <div className={style.subtitle}></div>
        <br />
        <div className={style.author}></div>
      </div>
    </div>
  );
}
