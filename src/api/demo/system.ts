import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  ChangePasswordParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/role/edit',
  MenuList = '/menu/menuList',
  MenuEdit = '/menu/edit',
  ChangePassword = '/auth/passwordChange',
  MenuDelete = '/menu/',
  RolePageList = '/role/page',
  GetAllRoleList = '/role/list',
  RoleDelete = '/role/',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.post<MenuListGetResultModel>({ url: Api.MenuList, params });

export const saveMenu = (params?: MenuParams) =>
  defHttp.post<Number>({ url: Api.MenuEdit, params });

export const deleteMenu = (params?: Number) =>
  defHttp.delete<Boolean>({ url: Api.MenuDelete + params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.post<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: number) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const saveRole = (params?: RoleParams) =>
  defHttp.post({ url: Api.setRoleStatus, params: params });

export const deleteRole = (params?: Number) =>
  defHttp.delete<Boolean>({ url: Api.RoleDelete + params });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

export const changePassword = (params?: ChangePasswordParams) =>
  defHttp.post<Boolean>({ url: Api.ChangePassword, params });
