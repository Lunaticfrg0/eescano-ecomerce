import { all, call, put, take, takeLatest } from "redux-saga/effects"
import { USER_ACTION_TYPES } from "./user.types"

import { signInSuccess, signInError } from "./user.action"

import { getCurrentUser, 
          createUserDocumentFromAuth,
          signInWithGooglePopUp, 
          signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
      const userSnapshot = yield call(
        createUserDocumentFromAuth,
        userAuth,
        additionalDetails
      );
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signInError(error));
    }
  }

export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* signInWithGoogle(){
    try {
        const {user} = yield call(signInWithGooglePopUp)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
      const { user } = yield call(
        signInAuthUserWithEmailAndPassword,
        email,
        password
      );
      yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
      yield put(signInError(error));
    }
  }

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}
export function* userSagas(){
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart)])
}