import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";
const CUSTOMER_CREATE = "customer/createCustomer";
const CUSTOMER_UPDATE = "customer/updateCustomer";

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ACCOUNT_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case ACCOUNT_REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACCOUNT_PAY_LOAN:
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
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

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
}

function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: ACCOUNT_PAY_LOAN };
}

function createCustomer(fullName, nationalID) {
  return {
    type: CUSTOMER_CREATE,
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

// function updateCustomer(fullName) {
//   return { type: CUSTOMER_UPDATE, payload: fullName };
// }

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("John", "123456"));
console.log(store.getState());

store.dispatch(deposit(250));
console.log(store.getState());

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "Buy a car",
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());
