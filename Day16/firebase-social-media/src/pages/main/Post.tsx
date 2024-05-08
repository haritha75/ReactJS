import { Post as IPost } from "./main";
import React from "react";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

interface Props {
  post: IPost;
}
interface Like {
  likeId: string;
  userId: string;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id));
  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userID: doc.data().userId, likeId: doc.id }))
    );
  };

  const hasUserLiked = likes?.fid((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDoc.id }]
            : [{ userId: user.uid, likeId: newDoc.id }]
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p>Likes: {likes?.length}</p>}
      </div>
    </div>
  );
};

// import { Post as IPost } from "./main";
// import React from "react";
// import {addDoc,collection } from "firebase/firestore";
// import { auth,db } from "../../config/firebase";
// import {useAuthState} from 'react-firebase-hooks/auth';

// interface Props {
//   post: IPost;
// }

// export const Post = (props: Props) => {
//   const { post } = props;
//   const [user] = useAuthState(auth);

//   const likesRef = collection(db, "likes");

//   const addLike = async () => {
//     await addDoc(likesRef,{userId:user?.uid,postId:post.id});

//   };

//   return (
//     <div>
//       <div className="title">
//         <h1>{post.title}</h1>
//       </div>
//       <div className="body">
//         <p>{post.description}</p>
//       </div>
//       <div className="footer">
//         <p>@{post.username}</p>
//         <button onClick={addLike}>&#128077;</button>
//       </div>
//     </div>
//   );
// };

// import { Post as IPost } from "./main";
// import React from "react";
// import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
// import { auth, db } from "../../config/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useState, useEffect } from "react";

// interface Props {
//   post: IPost;
// }

// export const Post = (props: Props) => {
//   const { post } = props;
//   const [user] = useAuthState(auth);
//   const [likeAmount, setLikeAmount] = useState<number | null>(null);

//   const likesRef = collection(db, "likes");

//   const likesDoc = query(likesRef, where("postId", "==", post.id));
//   const getLikes = async () => {
//     const data = await getDocs(likesDoc);
//     setLikeAmount(data.docs.length);
//   };
//   useEffect(() => {
//     getLikes();
//   }, []);

//   const addLike = async () => {
//     await addDoc(likesRef, { userId: user?.uid, postId: post.id });
//   };

//   return (
//     <div>
//       <div className="title">
//         <h1>{post.title}</h1>
//       </div>
//       <div className="body">
//         <p>{post.description}</p>
//       </div>
//       <div className="footer">
//         <p>@{post.username}</p>
//         <button onClick={addLike}>&#128077;</button>
//         {likeAmount && <p>Likes: {likeAmount}</p>}
//       </div>
//     </div>
//   );
// };
