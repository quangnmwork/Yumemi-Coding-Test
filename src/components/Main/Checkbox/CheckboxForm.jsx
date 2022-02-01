import React from "react";
import { useDispatch } from "react-redux";
import { prefectureActions } from "../../../redux/prefectureSlice";
import { AiOutlineDown } from "react-icons/ai";
import "./CheckboxForm.css";
import CheckboxTags from "./CheckboxTags";
const CheckboxForm = () => {
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    e.preventDefault();
    dispatch(prefectureActions.toggleShowOption());
  };

  return (
    <div className="box-form" onClick={handleToggle}>
      <CheckboxTags />
      <div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default CheckboxForm;
