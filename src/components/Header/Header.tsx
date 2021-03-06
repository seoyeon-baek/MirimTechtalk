import React, {useState} from "react";
import * as S from "./style";
import Logo from "../../assets/svgfiles/logo.svg";
import Alarm from "../../assets/svgfiles/alarm.svg";
import Plus from "../../assets/svgfiles/plus.svg";

const Header = ({user}: any) => {
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => setSearch(e.target.value);

  console.log(handleChange);
  console.log(user);
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.Icon src={Logo} />
        <S.Search placeholder="Search or jump to..." onChange={handleChange} />

        <button>/</button>
      </S.SearchWrapper>

      <S.NavWrapper>
        <span>Pull requests</span>
        <span>Issues</span>
        <span>Marketplace</span>
        <span>Explore</span>
      </S.NavWrapper>

      <S.ProfileWrapper>
        <S.Alarm src={Alarm} />
        <S.Plus src={Plus} />
        <S.Profile src={user.avatar_url} />
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default Header;
