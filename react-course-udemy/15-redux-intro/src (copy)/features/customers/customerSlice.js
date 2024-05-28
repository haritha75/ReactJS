import { createSlice } from "@reduxjs/toolkit"; //it tomatically creates action creators from our reducer and easy to write reducer no need switch cases

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;

/*
const CUSTOMER_CREATE = "customer/createCustomer";
const CUSTOMER_UPDATE = "customer/updateCustomer";

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case CUSTOMER_CREATE:
      return {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case CUSTOMER_UPDATE:
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: CUSTOMER_CREATE,
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateCustomer(fullName) {
  return { type: CUSTOMER_UPDATE, payload: fullName };
}
*/
