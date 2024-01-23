import React from "react";

export function Header() {
  const today = new Date();
  const currentDate = `
  ${today.getFullYear()}
  .${("0" + (today.getMonth() + 1)).slice(-2)}
  .${("0" + today.getDate()).slice(-2)}`;

  return (
    <header>
      <div>JiYoung's To Do List 📝</div>
      <div>{currentDate}</div>
    </header>
  );
}

export function Footer() {
  return <footer>© 2024. Zyoung Co. all rights reserved.</footer>;
}
