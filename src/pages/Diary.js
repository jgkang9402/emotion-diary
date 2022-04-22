import { useParams } from "react-router-dom"; // useParams 리액트에서 만든게아닌 어떤한사람이 편의를위해 만든 훅임. 커스텀훅(사용자정의훅)

const Diary = () => {

  const {id} = useParams();
  console.log(id)

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;