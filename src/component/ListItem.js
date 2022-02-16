import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editList, removeList } from "../redux/action";
import moment from "moment";
export default function ListItem({ e }) {
  const [inputEdit, setInputEdit] = useState(e.name);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(
      editList({
        ...e,
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
      <div>{e.id}</div>
      {isEdit ? (
        <input
          value={inputEdit}
          onChange={(e) => {
            setInputEdit(e.target.value);
          }}
          style={{ width: "200px" }}
        />
      ) : (
        <Link to={e.id.toString()} style={{ textDecoration: "none" }}>
          <div style={{ width: "200px" }}>{e.name}</div>
        </Link>
      )}
      <div style={{ width: "200px" }}>{e.time}</div>
      <button onClick={handleEdit} type="">
        {isEdit ? "Update" : "Edit"}
      </button>
      <button
        onClick={() => {
          dispatch(removeList(e.id));
        }}
        type=""
      >
        Delete
      </button>
    </div>
  );
}
