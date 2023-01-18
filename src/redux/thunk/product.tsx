import { AppDispatch } from "../store";
import { actions } from "../slice/product";

const url = "https://fakestoreapi.com/products"

export default function fetchProductData(){
    return async (dispatch:AppDispatch) => {
const response = await fetch(url)
const data = await response.json()

dispatch(actions.getProductData(data))
    }
}