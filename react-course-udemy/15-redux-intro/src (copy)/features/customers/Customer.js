import { useSelector } from "react-redux";

function Customer() {
  // to read the data use useSelector hook
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
