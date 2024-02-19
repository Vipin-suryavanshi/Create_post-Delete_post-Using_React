import { createContext, useReducer,useState,useEffect } from "react";
export const PostListContext = createContext({
  postlist: [],
  fething:false,
  Addpost: () => {},
  deltPost: () => {}, 
});
const postlistReducer = (currpostlist, action) => {
  let newPOstList = currpostlist;
  if (action.type === `DELETE_POST`) {
    newPOstList = currpostlist.filter(
      (card) => card.id !== action.payload.postID
    );
  } else if (action.type === `ADD_post`) {
    newPOstList = [action.payload, ...currpostlist];
  } else if (action.type === `GetServerPosts`) {
    newPOstList = action.payload.posts;
  }
  return newPOstList;
};
const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postlistReducer, []);

  const Addpost = (post) => {
    dispatchPostlist({
      type: `ADD_post`,
      payload: post,
    });
  };

  const GetServerPosts = (posts) => {
    dispatchPostlist({
      type: `GetServerPosts`,
      payload: {
        posts,
      },
    });
  };

  const deltPost = (postID) => {
    dispatchPostlist({
      type: `DELETE_POST`,
      payload: {
        postID,
      },
    });
  };

  const [fething , Getfetching] = useState(false)
  useEffect(()=>{
      Getfetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
      fetch("https://dummyjson.com/posts",{signal})
      .then((res)=>res.json())
      .then(data =>{
          GetServerPosts(data.posts)
          Getfetching(false);
      });
      return()=>{
        controller.abort();
      };
  },[]);
  return (
    <PostListContext.Provider
      value={{ postlist,fething, Addpost, deltPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
