import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "./CheckboxTags.css";
import { useDispatch } from "react-redux";
import { prefectureActions } from "../../../redux/prefectureSlice";
const CheckboxTagItem = (props) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (e) => {
    e.preventDefault();
    dispatch(prefectureActions.toggleShowOption());
    dispatch(prefectureActions.deletePrefecture(e.currentTarget.dataset.id));
  };

  return (
    <div
      className="tag-item"
      onClick={handleDeleteItem}
      data-id={props.prefecture.prefCode}
    >
      <div className="tag-item__box">
        <p className="tag-item__name">{props.prefecture.prefName}</p>
        <p className="tag-item__icon">
          <TiDeleteOutline />
        </p>
      </div>
    </div>
  );
};

export default CheckboxTagItem;
