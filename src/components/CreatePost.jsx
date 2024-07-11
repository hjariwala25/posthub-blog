import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: parseInt(likesElement.current.value, 10) || 0,
      dislikes: parseInt(dislikesElement.current.value, 10) || 0,
    };
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
    }),
    })
    .then(res => res.json())
    .then(post => {
      addPost(post);
      navigate("/");
    });
};

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userId"
            placeholder="Enter your user Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows={4}
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="likes" className="form-label">
            Number of likes
          </label>
          <input
            type="text"
            ref={likesElement}
            className="form-control"
            id="likes"
            placeholder="How many people liked this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dislikes" className="form-label">
            Number of dislikes
          </label>
          <input
            type="text"
            ref={dislikesElement}
            className="form-control"
            id="dislikes"
            placeholder="How many people disliked this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
