import { useRef, useContext} from "react";
import { PostListContext } from "../store/PostlistContext-store";
import { useNavigate } from 'react-router-dom'; 
const Form = () => {
  const { Addpost } = useContext(PostListContext);
  const navigate = useNavigate();
  const userIdElem = useRef();
  const titleElem = useRef();
  const postBodyElem = useRef();
  const reactionElem = useRef();
  const hashtagElem = useRef();

  const Handlesumbit = (event) => {
    event.preventDefault();
    const userId = userIdElem.current.value;
    const title = titleElem.current.value;
    const postBody = postBodyElem.current.value;
    const reaction = reactionElem.current.value;
    const hashtag = hashtagElem.current.value.split(" ");

    userIdElem.current.value = "";
    titleElem.current.value = "";
    postBodyElem.current.value = "";
    reactionElem.current.value = "";
    hashtagElem.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: postBody,
        userId: userId,
        reactions: reaction,
        tags: hashtag,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        Addpost(post);
        navigate("/");
      });
        
  };

  return (
    <form className="form-edit">
      <div className="mb-3">
        <label htmlFor="User" className="form-label">
          Enter your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElem}
          className="form-control"
          id="user"
          placeholder="Ex - amit-97"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="PostTitle" className="form-label">
          Enter Post Title
        </label>
        <input
          type="text"
          ref={titleElem}
          className="form-control"
          id="PostTitle"
          placeholder="Hey How r u Feeling Today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="PostContent" className="form-label">
          Enter Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElem}
          rows="4"
          className="form-control"
          id="PostContent"
          placeholder="Tell Us More About It..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Enter Reactions
        </label>
        <input
          type="text"
          ref={reactionElem}
          className="form-control"
          id="Reactions"
          placeholder="Numbers Of Peoples Reacted On THis Post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="HashTag" className="form-label">
          Enter HashTag
        </label>
        <input
          type="text"
          ref={hashtagElem}
          className="form-control"
          id="HashTag"
          placeholder="Enter Hashtag Here..."
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          As Per Your Belives all Information true
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={Handlesumbit}>
        Submit
      </button>
    </form>
  );
};
export default Form;
