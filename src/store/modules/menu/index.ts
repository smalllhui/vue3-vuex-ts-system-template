// @ts-ignore
import { ActionContext } from 'vuex'
import { RootState } from '@/store/modules'
import IMenuProp, { IMenuState } from '@/types/IMenuProp'
import logoImg from '@/assets/images/logo.svg'

// 定义menu模块下的state
const state: IMenuState = {
  isCollapse: false,
  logoSrc: logoImg,
  title: '个人博客管理系统',
  menuBackColor: 'rgb(48, 65, 86)',
  menuTextColor: '#fff',
  menuActiveTextColor: '#409EFF',
  menuActiveBackColor: '#263445',
  menuIsUnique: true,
  menuList: [],
}

/**
 * 定义menu模块下的actions
 */
const actions = {
  setRouteList(
    { commit }: ActionContext<IMenuState, RootState>,
    menuList: IMenuProp[],
  ) {
    setTimeout(() => {
      const routeList: any[] = []
      console.log('异步actions')
      commit('saveRouteList', routeList)
    }, 1000)
  },
}

/**
 * 定义menu模块下的mutations
 */
const mutations = {
  /**
   * @description: 切换isCollapse状态
   * @param {IMenuState} state
   * @return {*}
   */
  toggleCollapse(state: IMenuState): void {
    state.isCollapse = !state.isCollapse
  },
  /**
   * 保存系统菜单
   * @param state
   * @param menuList
   */
  saveMenuList(state: IMenuState, menuList: IMenuProp[]): void {
    state.menuList = menuList
  },
  // todo 清除菜单列表
  clearMenuListState(state: IMenuState): void {
    state.menuList = []
  },
}

/**
 * 定义menu模块下的getters
 */
const getters = {
  /**
   *获取菜单模块所有信息
   * @param state
   * @returns
   */
  getAllMenuInfo(state: IMenuState): IMenuState {
    return state
  },
  /**
   *获取菜单模块下菜单列表信息
   * @param state
   * @returns
   */
  getMenuList(state: IMenuState) {
    return state.menuList
  },
}
/**
 * 系统菜单数据模块
 */
export default {
  namespaced: true, // 声明命名空间
  state,
  mutations,
  actions,
  getters,
}
