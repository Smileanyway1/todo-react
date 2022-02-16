import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editList, removeList } from "../redux/action";
import moment from "moment";

export default function TodoDetail({ todo }) {
  const [inputEdit, setInputEdit] = useState(todo.name);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(
      editList({
        ...todo,
        name: inputEdit,
        time: moment().format("hh:mm:ss - DD/MM/YYYY"),
      })
    );
    setIsEdit(!isEdit);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div>{todo.id}</div>

      {isEdit ? (
        <input
          value={inputEdit}
          onChange={(e) => {
            setInputEdit(e.target.value);
          }}
          style={{ width: "200px" }}
        />
      ) : (
        <div style={{ width: "200px" }}>{todo.name}</div>
      )}
      <div style={{ width: "200px" }}>{todo.time}</div>

      <button onClick={handleEdit} type="">
        {isEdit ? "Update" : "Edit"}
      </button>
      <button
        onClick={() => {
          dispatch(removeList(todo.id));
        }}
        type=""
      >
        Delete
      </button>
    </div>
  );
}
