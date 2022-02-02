import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Skeleton from "../../utils/Skeleton";
import CheckboxForm from "./CheckboxForm";
import { useDispatch } from "react-redux";
import "./CheckboxList.css";
import Select from "./Select";
import { getPrefecture } from "../../../redux/prefectureSlice";

const CheckboxList = () => {
  const prefecture = useSelector((state) => state.prefecture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrefecture());
  }, [dispatch]);
  return (
    <>
      {
        <Skeleton
          isLoading={prefecture.fetchStatus === "pending" ? false : true}
        >
          <div className="container">
            <CheckboxForm />
            <Select />
          </div>
        </Skeleton>
      }
    </>
  );
};

export default CheckboxList;
