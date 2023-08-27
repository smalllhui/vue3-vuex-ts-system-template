import { TabsState, ITab } from '@/types/ITabsProp'
// 定义tabs模块下的state
const state: TabsState = {
  tabList: [],
  activePath: '',
}
// 定义tabs模块下的actions
const actions = {}

// 定义tabs模块下的mutations
const mutations = {
  /**
   * 添加新tab到tabList中 并更新激活路径
   * @param state
   * @param tab
   */
  addTab(state: TabsState, tab: ITab): void {
    const tabItem = state.tabList.find(item => item.path === tab.path)
    if (tabItem) {
      state.activePath = tabItem.path
    } else {
      state.tabList.push(tab)
      state.activePath = tab.path
    }
  },
  /**
   * 根据path从tabList中移除 并更新激活路径
   * @param state
   * @param tab
   */
  removeCurrentTab(state: TabsState, path: string): void {
    if (state.tabList.length > 1) {
      state.tabList = state.tabList.filter(item => item.path !== path)
      state.activePath = state.tabList[state.tabList.length - 1].path
    }
  },
  /**
   * 根据path从tabList中移除 并更新激活路径
   * @param state
   * @param tab
   */
  closeOtherTab(state: TabsState, path: string): void {
    const find = state.tabList.find(item => item.path === path)
    if (find) {
      state.activePath = find.path
      state.tabList = [find]
    }
  },
  // todo 清除数据
  clearTabState(state: TabsState) {
    state.activePath = ''
    state.tabList = []
  },
}

// 定义tabs模块下的getters
const getters = {
  // getTabs(state: TabsState) {
  //   return state.tabList
  // },
}

export default {
  namespaced: true, // 声明命名空间
  state,
  mutations,
  actions,
  getters,
}
