import { InjectionKey } from 'vue'
// @ts-ignore
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// 数据缓存
import createPersistedState from 'vuex-persistedstate'
// 引入vuex-ts自定义类型推断类，代码提示的核心
import { CommonStore } from './vuex_ts_help'

// 导入模块及根数据类型
import { RootState, modules } from './modules'

export const key: InjectionKey<Store<RootState>> = Symbol()
export const store = createStore<RootState>({
  modules,
  plugins: [
    createPersistedState({
      key: 'vuexPersistedTest',
      storage: window.sessionStorage, // 同localStorage相同，只是将vuex的所有值存储到localStorage中
    }),
  ],
}) as CommonStore

// 定义自己的 `useStore` 组合式函数
export function useStore(): CommonStore {
  return baseUseStore(key)
}
