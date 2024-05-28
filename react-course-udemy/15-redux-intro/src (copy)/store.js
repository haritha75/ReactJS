import { configureStore } from "@reduxjs/toolkit";
// redux-toolkit is used to reduce the code means optimization the performance usimg we can achieve same result and also code reduced.
// it contians all the libary of redux also. also it configure all the dependencies.

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
