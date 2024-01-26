import React from "react";

function TodoSort({ sortOrder, sortTodos, onChangeSortOrderHandler }) {
  return (
    <div>
      <select
        onClick={sortTodos}
        value={sortOrder}
        onChange={onChangeSortOrderHandler}
      >
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
    </div>
  );
}

export default TodoSort;
