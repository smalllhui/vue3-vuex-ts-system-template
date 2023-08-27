/**
 * @Author: PanZongHui
 * @Description:modules 汇总文件
 */

// 引入tab模块
import { TabsState } from '@/types/ITabsProp'
import { IMenuState } from '@/types/IMenuProp'
import { UserState } from '@/types/IUserProp'
import tabs from './tabs/tabs'
// 引入menu模块
import menu from './menu'
// 引入user模块
import user from './user'

// 定义根级State类型
export type RootState = {
  tabs: TabsState
  menu: IMenuState
  user: UserState
}

// 把多个模块聚合在一起
export const modules = {
  tabs,
  menu,
  user,
}
