import style from "./lodingbar.module.css";
import { ProgressBarProps } from "../types/loading";
export default function LoadingBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className={style.progressContainer}>
      <div
        className={style.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
