// import { ActionContext } from 'vuex'
// import { RootState } from '@/store/modules'

// 定义user的类型
import { IUser, UserState } from '@/types/IUserProp'

// 定义user模块下的state
export const state: UserState = {
  userInfo: {
    userNick: '',
    userAvatar: '',
  },
  token: '',
}
// 定义user模块下的mutations
export const mutations = {
  // todo 保存用户信息
  saveUserInfo(state: UserState, user: UserState): void {
    state.userInfo = user.userInfo
    state.token = user.token
  },
  // todo 清除数据
  clearUserState(state: UserState) {
    state.token = ''
    state.userInfo = {
      userNick: '',
      userAvatar: '',
    }
  },
}
// 定义user模块下的actions
export const actions = {}
// 定义user模块下的getters
export const getters = {
  getToken(state: UserState): string {
    return state.token
  },
  /**
   *
   * @param state 获取用户信息
   * @returns
   */
  getUserInfo(state: UserState): IUser {
    return state.userInfo
  },
}

export default {
  namespaced: true, // 声明命名空间
  state,
  mutations,
  actions,
  getters,
}
