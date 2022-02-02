import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prefectureActions } from "../../../redux/prefectureSlice";
import { AiOutlineDown } from "react-icons/ai";
import "./CheckboxForm.css";
import CheckboxTags from "./CheckboxTags";
const CheckboxForm = () => {
  const dispatch = useDispatch();
  const selectedPrefectures = useSelector(
    state => state.prefecture.selectedPrefectures
  );
  const handleToggle = e => {
    e.preventDefault();
    dispatch(prefectureActions.toggleShowOption());
  };

  return (
    <div className="box-form" onClick={handleToggle}>
      {selectedPrefectures.length ? <CheckboxTags /> : <p>県を選ぶ</p>}
      <div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default CheckboxForm;
