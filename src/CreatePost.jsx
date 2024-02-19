// import { useContext, useEffect, useState } from "react";
// import Cards from "./component/Cards";
// import { PostListContext } from "./store/PostlistContext-store";
// import WelcomeMsg from "./component/WelcomeMsg";
// import Spinner from "./component/Spinner";
// const CreatePost = () => {
//     const {postlist,fething} = useContext(PostListContext);
 
//     return(
//     <>
//     {fething && <Spinner/>}
//     {!fething && postlist.length === 0 && <WelcomeMsg  /> }
   

// {!fething &&
//                 postlist &&
//                 postlist.length > 0 &&
//                 postlist.map((card) => (
//                     card && card.id ? (
//                         <Cards key={card.id} card={card}></Cards>
//                     ) : null
//                 ))}
//     </>
// )};
// export default CreatePost;

 {/* {!fething && postlist.map((card) => (
        <Cards key={card.id}  card={card} ></Cards>
    ))} */}










    import React, { useContext } from "react";
import Cards from "./component/Cards";
import { PostListContext } from "./store/PostlistContext-store";
import WelcomeMsg from "./component/WelcomeMsg";
import Spinner from "./component/Spinner";

const CreatePost = () => {
    const { postlist, fething } = useContext(PostListContext);

    console.log("fething:", fething);
    console.log("postlist:", postlist);
    return (
        <>
            {fething && <Spinner />}
            {!fething && postlist.length === 0 && <WelcomeMsg />}
            {!fething && Array.isArray(postlist) && postlist.length > 0 && (
                <div>
                    {postlist.map((card) => (
                        card && card.id ? (
                            <Cards key={card.id} card={card}></Cards>
                        ) : null
                    ))}
                </div>
            )}
        </>
    );
};

export default CreatePost;
