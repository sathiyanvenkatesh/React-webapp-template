import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux-sclice/UserSclice";
import recipesReducer from  "../redux-sclice/RecipesSclice";
import usersReducer from "../redux-sclice/UserCurdSclice";

export default configureStore({
  reducer:{
      user:userReducer,   // user is store name from usersclice
      recipes: recipesReducer,
      users:usersReducer

  } ,

});