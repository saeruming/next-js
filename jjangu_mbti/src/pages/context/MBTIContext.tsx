import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

import { MBTIContextType } from "../types/mbti";

const MBTIContext = createContext<
  MBTIContextType | undefined
>(undefined);

export const MBTIProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [answers, setAnswers] = useState<number[]>([]);

  const addAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
  };
  const resetAnswers = () => setAnswers([]);

  return (
    <MBTIContext.Provider
      value={{ answers, addAnswer, resetAnswers }}
    >
      {children}
    </MBTIContext.Provider>
  );
};

export const useMBTI = () => {
  const context = useContext(MBTIContext);
  if (!context) {
    throw new Error(
      "useMBTI must be used within an MBTIProvider"
    );
  }
  return context;
};
