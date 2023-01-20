import { AppDispatch } from "../store";
import { actions } from "../slice/product";

// fetch country detail data from url by fetch
export default function fetchProductDetailData(id: string | undefined) {
  const url = `https://fakestoreapi.com/products/${id}`
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    const updatedData = {...data,qty:1}
    dispatch(actions.getProductDetailData(updatedData));
  };
}
