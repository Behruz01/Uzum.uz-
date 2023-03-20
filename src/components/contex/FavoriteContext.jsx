// import { createSlice } from "@reduxjs/toolkit";
// import { createContext } from "react";
// import { useDispatch } from "react-redux";
// import { add, remove } from "../../store/slicers/favoriteSlice";

// export const FavoriteContext = createContext();

// const FavoriteContextProvider = ({ children }) => {
    
//   const initialFavoriteSlicer = {
//     favoriteProduct: [],
//   };
//  const favoriteSlicer = createSlice({
//     name: "favorite",
//     initialState: initialFavoriteSlicer,
//     reducers: {
//       add: (state, action) => {
//         state.favoriteProduct.push(action.payload);
//       },
//       remove: (state, action) => {
//         state.favoriteProduct = state.favoriteProduct.filter((video) => {
//           if (video.id !== action.payload.id) {
//             return true;
//           }
//         });
//       },
//     },
//   });
// //////////////////////////////////////
//   const dispatch = useDispatch();
//   const updateLikeHandler = (Product) => {
//     let hasProduct = false;
//     favoriteProduct.forEach((element) => {
//       if (element.id === Product.id) {
//         hasProduct = true;
//       }
//     });
//     if (hasProduct) {
//       dispatch(remove(Product));
//     } else {
//       dispatch(add(Product));
//     }
//   };

//   return (
//     <FavoriteContext.Provider value={updateLikeHandler}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export default FavoriteContextProvider;
