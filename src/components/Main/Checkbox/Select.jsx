import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPrefecture } from "../../../redux/prefectureSlice";
import "./Select.css";
import SelectItem from "./SelectItem";
import { useDispatch } from "react-redux";

const Select = () => {
  const prefecture = useSelector((state) => state.prefecture);

  return (
    <div
      className={
        prefecture.isShowOption
          ? "select-container"
          : "select-container__invalid"
      }
    >
      {prefecture.prefectures.length
        ? prefecture.prefectures.map((pref, key) => (
            <SelectItem key={key} pref={pref} />
          ))
        : null}
    </div>
  );
};

export default Select;
