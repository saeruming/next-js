export interface Question {
  question: string;
  options: { text: string; value: number }[];
  image: string;
}

export interface MBTIContextType {
  answers: number[];
  addAnswer: (answer: number) => void;
  resetAnswers: () => void;
}
//E:1, I:0
//S:1, N:0
//T:1, F:0
//P:1, J:0
export const questions: Question[] = [
  //E:1, I:0
  {
    question:
      "친구들과 놀고 집에 왔는데, 아무도 없다. 내 기분은?",
    options: [
      {
        text: "드디어 나만의 시간이다. 편하고 행복해",
        value: 0,
      },
      {
        text: "외로워.. 깜깜하고 조용하니 TV를 켜겠어",
        value: 1,
      },
    ],
    image: "/assets/image1.jpg",
  },
  {
    question:
      "떡잎방범대는 야구 모임을 만들었다. 나도 껴달라 할까?",
    options: [
      {
        text: "난 집에서 혼자 퍼즐 맞추거나 애니보는게 좋아",
        value: 0,
      },
      {
        text: "그 야구 모임에 가입하여 떡잎방범대와 어울린다",
        value: 1,
      },
    ],
    image: "/assets/image2.jpg",
  },
  {
    question:
      "짱구랑 만나기로 헀는데 갑자기 약속을 취소했다. 내 기분은?",
    options: [
      {
        text: "아싸~ 갑자기 혼자만의 시간이 생겼네. 럭키비키자나~",
        value: 0,
      },
      {
        text: "짱구 너무해..그럼 누구 만나야하지..? 철수에게 전화해봐야지",
        value: 1,
      },
    ],
    image: "/assets/image3.jpg",
  },
  {
    //S:1, N:0
    question:
      "하늘을 봤는데 풍선이 있다. 풍선을 보고 떠오른는 생각은?",
    options: [
      {
        text: "풍선을 타고 하늘로 올라가보고 싶어!/헬륨가스 먹고 목소리 변하면 어떨까?",
        value: 0,
      },
      {
        text: "색깔이 빨간색이네 / 잘하면 터질 수도 있겠는데",
        value: 1,
      },
    ],
    image: "/assets/image4.jpg",
  },
  {
    question:
      "집으로 돌아가는길, 못보던 길이 있다. 기존 길로 갈까 아니면 새로운 길로 갈까?",
    options: [
      { text: "새로운 길로 간다", value: 0 },
      { text: "뭐가 더 빨라?", value: 1 },
    ],
    image: "/assets/image5.jpg",
  },
  {
    question:
      "자주 가던 식당에서 후식으로 원래 나오지 않던 귤이 나왔다. 내 반응은?",
    options: [
      {
        text: "왜 갑자기 귤이지? 날이 추워지고 귤이 제철이라 그런가? 아니면 사장님이 제주도 사람인가?",
        value: 0,
      },
      { text: "아싸 귤이다?", value: 1 },
    ],
    image: "/assets/image6.jpg",
  },
  {
    //T,F
    question:
      "훈이가 버스를 눈 앞에서 놓쳐서 약속에 늦을 것 같다고 연락이 왔다. 내 대답은?",
    options: [
      {
        text: "음 알겠어 기다리고 있을게(근데 사과는?)",
        value: 0,
      },
      {
        text: "음 알겠어 기다리고 있을게(이유가 타당하네)",
        value: 1,
      },
    ],
    image: "/assets/image7.jpg",
  },
  {
    question:
      "유리가 이빨이 10개 뽑히는 꿈을 꿨다고 한다. 내 반응은?",
    options: [
      {
        text: "헐 무서웠겠다ㅠㅠ 나였으면 바로 기절했어..",
        value: 0,
      },
      { text: "그래? 그래도 꿈이잖아~", value: 1 },
    ],
    image: "/assets/image8.jpg",
  },
  {
    question:
      "훈이가 나에게 '이러면 너 아무도 너 안 좋아해'라고 말했다. 내 기분은?",
    options: [
      { text: " 크게 신경쓰고 슬퍼한다", value: 0 },
      { text: "지랄 어이없다", value: 1 },
    ],
    image: "/assets/image9.jpg",
  },
  {
    //J,P
    question: "책상 정리를 하려고 한다. 어떻게 할까?",
    options: [
      {
        text: "물건은 항상 제자리에! 박스에 잘 정리해서 넣고, 필요할때 언제든지 찾을 수 있게 해야지",
        value: 0,
      },
      {
        text: "조금 어지러워 보여도 나만의 정리 방식이 있어! 내가 찾을 수 있는 곳에 잘 놔두기",
        value: 1,
      },
    ],
    image: "/assets/image10.jpg",
  },
  {
    question:
      "짱구랑 약속을 정해서 놀기로 하였다. 나라면 약속을 어떻게 정할까?",
    options: [
      {
        text: "최적화된 동선을 생각해서 맛집과 카페를 체크한다",
        value: 0,
      },
      {
        text: "메인 주제 하나를 정하고 세부적인건 만나서 정하자!",
        value: 1,
      },
    ],
    image: "/assets/image11.jpg",
  },
  {
    question: "짱구가 가족 여행을 앞두고 하는 일은?",
    options: [
      {
        text: "하루하루 일정과 가야할 곳을 미리 다 생각한다",
        value: 0,
      },
      {
        text: "일단 굵직한 것은 생각해놓고 세세한 부분은 도착해서 생각한다",
        value: 1,
      },
    ],
    image: "/assets/image12.jpg",
  },
];
