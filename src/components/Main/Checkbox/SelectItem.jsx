import React from "react";
import "./Select.css";
import { prefectureActions } from "../../../redux/prefectureSlice";
import { getPopulation } from "../../../redux/prefectureSlice";
import { useDispatch } from "react-redux";
const SelectItem = (props) => {
  const dispatch = useDispatch();
  const selectPrefHandler = async (e) => {
    e.preventDefault();
    dispatch(prefectureActions.selectPrefecture(props.pref));
    dispatch(getPopulation(props.pref));
  };
  return (
    <div className="select-item" onClick={selectPrefHandler}>
      {props.pref.prefName}
    </div>
  );
};

export default SelectItem;
