import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "らいむ",
    image:
      "https://source.unsplash.com/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4",
    email: "test@example.com",
    tel: "000-0000-0000",
    company: {
      name: "オレオレ株式会社",
    },
    web: "localhost:3000.com",
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState)
  // const {userInfo, setUserInfo} = useContext(UserContext);
  const onClickSwitch = () => {
    setUserInfo({isAdmin: !userInfo.isAdmin})
  }
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
