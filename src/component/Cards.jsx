import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/PostlistContext-store";
const Cards = ({ card }) => {
  const {deltPost} = useContext(PostListContext);
  return (
    <div className="card Card-flex" style={{ width: "40rem" }}>
      <div className="card-body ">
        <h5 className="card-title">
          {card.title}
          {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deltitm"
          onClick={()=> deltPost(card.id)}>
          <MdDelete />
          </span> */}
          <span
  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deltitm"
  onClick={() => deltPost(card.id)}
>
  <MdDelete />
</span>
        </h5>
        <p className="card-text">{card.body}</p>
        {card.tags.map((hash) => (
          <span key={hash} className="badge text-bg-primary hashtag">
            {hash}
          </span>
        ))}
      
        <div className="alert alert-success" role="alert">
        This post has been Reacted by<b> {card.reactions} </b>peoples
        </div>
      </div>
    </div>
  );
};
export default Cards;
