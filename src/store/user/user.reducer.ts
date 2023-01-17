import { USER_ACTION_TYPES } from "./user.types"
import { signInError, signOutError, signOutSuccess, signInSuccess, signUpError } from "./user.action";
import { AnyAction } from "redux"
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}
export const userReducer = (state = INITIAL_STATE, action: AnyAction) : UserState => {
  
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signOutError.match(action) ||
    signInError.match(action) ||
    signUpError.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
  };
