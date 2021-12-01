import { usersAPI, profileAPI } from "../api/api";

let ADD_POST = "ADD_POST";
let DELETE_POST = "DELETE_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: "1", message: "How are you?", likeCount: "20" },
    { id: "2", message: "Are you ok?", likeCount: "225" },
    { id: "3", message: "What is your name?", likeCount: "3" },
    { id: "4", message: "Where do you live?", likeCount: "45" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      let message = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: "5", message: message, likeCount: "0" }],
      };
    }
    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};
export const deletePostCreator = (postId) => {
  return { type: DELETE_POST, postId };
};

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
