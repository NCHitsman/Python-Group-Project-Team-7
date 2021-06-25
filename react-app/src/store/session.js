// Constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const EDIT_USER = "session/EDIT_USER"

// Action Creators
const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
});

const editUser = (user) => ({
  type: EDIT_USER,
  payload: user
});

//Thunks
export const authenticate = () => async(dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (data.errors) {
        return;
    }

    dispatch(setUser(data))

    return true;
  }

  export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if (data.errors) {
        return data;
    }

    dispatch(setUser(data))
    return {}
  }

  export const demoLogin = (id) => async (dispatch) => {
    const response = await fetch('.api/auth/demologin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    const data = await response.json();

    if (data.errors) {
      return data;
    }

    dispatch(setUser(data))
    return {}
  }

export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });

    await response.json();
    dispatch(removeUser())
  };


  export const signUp = (username, email, password) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.errors) {
        return
    }

    dispatch(setUser(data))
  }


  export const edit = (username, email, password, repeat_password) => async (dispatch) => {
    const response = await fetch("/api/users/edit-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        repeat_password
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return
    }

    dispatch(editUser(data))
  }

// Reducer

const initialState = {user: null}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        case EDIT_USER:
            return { user: action.payload }
        default:
            return state
    }
};
