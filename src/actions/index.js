import jsonPlaceholder from "../apis/jasonPlaceholder";

// adapted to use middleware redux-thunk, dispatch a function in a redux action creator:

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("./posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
