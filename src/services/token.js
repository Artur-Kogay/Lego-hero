import {$api} from "./api";

export const tokenGetAccess = () => {
  return window.localStorage.getItem("access");
};

export const tokenGetRefresh = () => {
  return window.localStorage.getItem("refresh");
};

export const tokenRemoveItems = () => {
  window.localStorage.removeItem('access');
  window.localStorage.removeItem('refresh');
};

export const tokenRefreshItems = async () => {
  const _refresh = tokenGetRefresh();
  if (!_refresh) {
    await tokenRemoveItems()
    throw new Error('No refresh token');
  }
  const {data: {access, refresh}} = await $api.post('/accounts/auth/jwt/refresh/', {_refresh});
  await window.localStorage.setItem('access', access);
  await window.localStorage.setItem('refresh', refresh);
  return {access, refresh};
}
