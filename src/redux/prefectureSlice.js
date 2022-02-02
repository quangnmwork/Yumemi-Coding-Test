import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../api/repositoryFactory";
const prefectureApi = RepositoryFactory.get("prefectures");
const populationApi = RepositoryFactory.get("populations");
export const getPrefecture = createAsyncThunk(
  "prefecture",
  // eslint-disable-next-line no-unused-vars
  async (payload, thunkAPI) => {
    try {
      const res = await prefectureApi.getPrefecture();
      return res.data.result;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getPopulation = createAsyncThunk(
  "population",
  // eslint-disable-next-line no-unused-vars
  async (payload, thunkAPI) => {
    try {
      const res = await populationApi.getPopulation(payload.prefCode);
      return [res.data.result.data[0], payload];
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
    selectedPrefecturesData: [],
    prefectures: [],
    fetchStatus: "pending",
  },
  reducers: {
    toggleShowOption: state => {
      state.isShowOption = !state.isShowOption;
    },
    selectPrefecture: (state, action) => {
      state.selectedPrefectures.push(action.payload);
      state.prefectures = state.prefectures.filter(
        pref => pref.prefCode != action.payload.prefCode
      );
    },
    deletePrefecture: (state, action) => {
      let prefAdd;
      // eslint-disable-next-line array-callback-return
      state.selectedPrefectures = state.selectedPrefectures.filter(pref => {
        if (pref.prefCode == action.payload) prefAdd = pref;
        else return pref;
      });
      state.prefectures.unshift(prefAdd);
      state.selectedPrefecturesData = state.selectedPrefecturesData.filter(
        pref => pref[1].prefCode != action.payload
      );
    },
  },
  extraReducers: {
    [getPrefecture.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.prefectures = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    [getPrefecture.rejected]: (state, action) => {
      state.fetchStatus = "fail";
    },
    [getPopulation.fulfilled]: (state, action) => {
      state.selectedPrefecturesData.push(action.payload);
    },
  },
});
const { reducer: prefectureReducer } = prefectureSlice;
export const prefectureActions = prefectureSlice.actions;
export default prefectureReducer;
