import { Types } from '../constants/actionTypes';

export const ActionCreators = {
  addProfile: (user) => ({ type: Types.addUser, payload: { user } }),
  updateProfile: (user) => ({ type: Types.updateUser, payload: { user } }),
  login: (user) => ({ type: Types.login, payload: { user } })
}