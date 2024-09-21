import React, { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagInput = useRef();

  const handleAddTag = () => {
    const tagValue = tagInput.current.value.trim();
    if (tagValue && !tags.includes(tagValue)) {
      setTags([...tags, tagValue]);
      tagInput.current.value = '';
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const postData = {
      title: postTitleElement.current.value,
      body: postBodyElement.current.value,
      reactions: {
        likes: parseInt(likesElement.current.value, 10) || 0,
        dislikes: parseInt(dislikesElement.current.value, 10) || 0,
      },
      userId: userIDElement.current.value,
      tags: tags,
    };

    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
      const post = await response.json();
      addPost(post);
      navigate("/");
    } catch (error) {
      console.error('Error adding post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card create-post" style={{ width: "30rem", margin: "auto", marginTop: "2rem" }}>
      <div className="card-body">
        <h5 className="card-title mb-4">Create a New Post</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              ref={userIDElement}
              className="form-control"
              placeholder="User ID"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              ref={postTitleElement}
              className="form-control"
              placeholder="Post Title"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              ref={postBodyElement}
              className="form-control"
              rows={4}
              placeholder="Post Content"
              required
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="number"
                ref={likesElement}
                className="form-control"
                placeholder="Likes"
              />
            </div>
            <div className="col">
              <input
                type="number"
                ref={dislikesElement}
                className="form-control"
                placeholder="Dislikes"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <input
                type="text"
                ref={tagInput}
                className="form-control"
                placeholder="Add Tag"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleAddTag}
              >
                Add Tag
              </button>
            </div>
          </div>
          <div className="mb-3">
            {tags.map((tag) => (
              <span key={tag} className="badge bg-primary me-2">
                {tag}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-2"
                  aria-label="Close"
                  onClick={() => handleRemoveTag(tag)}
                ></button>
              </span>
            ))}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Posting...
              </>
            ) : (
              'Create Post'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;