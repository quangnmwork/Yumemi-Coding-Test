import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../api/repositoryFactory";
const prefectureApi = RepositoryFactory.get("prefectures");
export const getPrefecture = createAsyncThunk(
  "prefecture",
  async (payload, thunkAPI) => {
    try {
      const res = await prefectureApi.getPrefecture();
      return res.data.result;
    } catch (err) {
      console.log(err);
    }
  }
);

const prefectureSlice = createSlice({
  name: "prefecture",
  initialState: {
    isShowOption: false,
    selectedPrefectures: [],
    prefectures: [],
    fetchStatus: "pending",
  },
  reducers: {
    toggleShowOption: (state) => {
      state.isShowOption = !state.isShowOption;
    },
    selectPrefecture: (state, action) => {
      state.selectedPrefectures.push(action.payload);
      state.prefectures = state.prefectures.filter(
        (pref) => pref.prefCode != action.payload.prefCode
      );
    },
    deletePrefecture: (state, action) => {
      let prefAdd;
      state.selectedPrefectures = state.selectedPrefectures.filter((pref) => {
        if (pref.prefCode == action.payload) prefAdd = pref;
        else return pref;
      });
      state.prefectures.unshift(prefAdd);
    },
  },
  extraReducers: {
    [getPrefecture.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.prefectures = action.payload;
      state.selectedPrefectures = [action.payload[0]];
      state.prefectures.shift();
    },
    [getPrefecture.rejected]: (state, action) => {
      state.fetchStatus = "fail";
    },
  },
});
const { reducer: prefectureReducer } = prefectureSlice;
export const prefectureActions = prefectureSlice.actions;
export default prefectureReducer;
