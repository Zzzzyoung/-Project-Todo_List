import { SelectBtn } from "Style";
import React from "react";

function TodoSort({ sortOrder, sortTodos, onChangeSortOrderHandler }) {
  return (
    <div>
      <SelectBtn
        onClick={sortTodos}
        value={sortOrder}
        onChange={onChangeSortOrderHandler}
      >
        <option value={""}>정렬 기준</option>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </SelectBtn>
    </div>
  );
}

export default TodoSort;
