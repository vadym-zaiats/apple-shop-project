import { createSlice } from '@reduxjs/toolkit';
import fetchApi from '../../api/fetchApi';
import { productsEP } from '../../api/constants';
import { setErrorMessage } from './errorsSlice';

const allProdsSlice = createSlice({
  name: 'allProducts',
  initialState: {
    allProds: [],
    isFetching: false,
    isFetched: false,
  },
  reducers: {
    startGetArray: (state) => {
      state.isFetching = true;
    },
    finishGetArray: (state, action) => {
      state.isFetching = false;
      state.isFetched = true;
      state.allProds = action.payload;
    },
    errorGetArray: (state) => {
      state.isFetching = false;
    },
  },
});

export default allProdsSlice.reducer;
export const { startGetArray, finishGetArray, errorGetArray } =
  allProdsSlice.actions;

export const getAllSaleProducts = () => async (dispatch) => {
  dispatch(startGetArray());
  try {
    const resultArray = await fetchApi(productsEP);
    const saleArray = resultArray.filter((product) => product.saleImg);
    dispatch(finishGetArray(saleArray));
  } catch (error) {
    dispatch(
      errorGetArray({
        error: error.message,
      })
    );
    dispatch(
      setErrorMessage({
        error: error.message,
      })
    );
  }
};
