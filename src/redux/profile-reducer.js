import { usersAPI, profileAPI } from "./../api/api";

let ADD_POST = "ADD_POST";
let UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: "1", message: "How are you?", likeCount: "20" },
    { id: "2", message: "Are you ok?", likeCount: "225" },
    { id: "3", message: "What is your name?", likeCount: "3" },
    { id: "4", message: "Where do you live?", likeCount: "45" },
  ],
  newPostText: "введи текст поста",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      let message = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: "5", message: message, likeCount: "0" }],
      };
    }
    case "UPDATE_NEW_POST_TEXT": {
      return {
        ...state,
        newPostText: action.newText,
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

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
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
