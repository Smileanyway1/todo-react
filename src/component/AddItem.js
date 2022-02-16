import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../redux/action";
import moment from "moment";
import ListItem from "./ListItem";

const AddItem = () => {
  const [inputAdd, setInputAdd] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state);
  const handleInput = (e) => {
    setInputAdd(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setInputAdd("");
    setId(id + 1);
    dispatch(
      addList({
        id: id,
        name: inputAdd,
        time: moment().format("hh:mm:ss - DD/MM/YYYY"),
      })
    );
  };
  return (
    <div>
      <input value={inputAdd} onChange={handleInput} type="" />
      <button onClick={submit} type="">
        submit
      </button>
      <div>
        {lists.map((e, index) => {
          return <ListItem e={e} key={index} />;
        })}
      </div>
    </div>
  );
};
export default AddItem;
