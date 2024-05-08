import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

// import React, { useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../config/firebase";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const signInWithGoogle = async () => {
//     try {
//       setLoading(true); // Set loading state to true
//       const result = await signInWithPopup(auth, provider);
//       console.log(result);
//       navigate("/");
//     } catch (error) {
//       console.error("Error signing in:", error);
//       setLoading(false); // Reset loading state on error
//     }
//   };

//   return (
//     <div>
//       <p> Sign In With Google To Continue </p>
//       <button onClick={signInWithGoogle} disabled={loading}>
//         {loading ? "Signing In..." : "Sign In With Google"}
//       </button>
//     </div>
//   );
// };
