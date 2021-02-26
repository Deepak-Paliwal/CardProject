import { createStore } from "redux";

export let initialstate = {
  signupUser: []
};

export const maintainInitialState = (state = initialstate, action) => {
  let { signupUser } = state;
  switch (action.type) {
    case "AddData": {
      signupUser = [...signupUser, action.payload];
      console.log("User are:", signupUser);
      localStorage.setItem("Data", JSON.stringify(signupUser));
      return { ...state, signupUser };
    }
    case "dispatchalldata": {
      let userinlocalstorage = JSON.parse(localStorage.getItem("Data"));
      if (userinlocalstorage != null) {
        userinlocalstorage.map((user, index) => {
          signupUser = [...signupUser, user];
        });
      }
      return { ...state, signupUser };
    }
  }
};

export const store = createStore(maintainInitialState);

store.subscribe(() => {
  console.log("Initial State is:", store.getState());
});
