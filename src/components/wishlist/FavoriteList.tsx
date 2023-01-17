import { useSelector } from "react-redux";

// store redux components
import FavoriteItem from "./FavoriteItem"
import {RootState } from "../../redux/store"
const FavoriteList=()=>{
  const favoriteList=useSelector((state:RootState)=>state.product.favorites);
 
  
return (
  <div className="favourite-list">
    <h1> Favorite Items are </h1>
    {favoriteList.map((item,quantity) => {
      return <FavoriteItem key={item.id} favourite={item} quantity={quantity+1} />;
    })}
  </div>
);




}  
export default FavoriteList
