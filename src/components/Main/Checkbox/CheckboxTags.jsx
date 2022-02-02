import React from "react";
import { useSelector } from "react-redux";
import CheckboxTagItem from "./CheckboxTagItem";
import "./CheckboxTags.css";
const CheckboxTags = () => {
  const prefecture = useSelector(
    (state) => state.prefecture.selectedPrefectures
  );
  return (
    <div>
      {prefecture.map((prefecture, key) => (
        <CheckboxTagItem prefecture={prefecture} key={key} />
      ))}
    </div>
  );
};

export default CheckboxTags;
