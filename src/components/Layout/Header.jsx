import React from "react";
import { StHeader } from "../../Style";

function Header() {
  const today = new Date();
  const currentDate = `
    ${today.getFullYear()}
    .${("0" + (today.getMonth() + 1)).slice(-2)}
    .${("0" + today.getDate()).slice(-2)}`;

  return (
    <StHeader>
      <div>JiYoung's To Do List 📝</div>
      <div>{currentDate}</div>
    </StHeader>
  );
}

export default Header;
