import ProductDetail from "../components/products/ProductDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import fetchProductDetailData from "../redux/thunk/productDetail";

const DetailProduct = () => {
  const { id } = useParams();

  const productDetail = useSelector(
    (state: RootState) => state.product.productDetail
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductDetailData(id));
  }, [dispatch, id]);

  
  return (
    <div>
      {productDetail ? (
        <ProductDetail productDetail={productDetail} />
      ) : (
        <div>
          <i className="fas fa-spinner fa-spin fa-xl" />
          <p style={{ marginTop: "10px" }}>Please wait...</p>
        </div>
      )}
    </div>
  );
};
export default DetailProduct;
