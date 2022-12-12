export const logoutHelper = (cb: () => void): void => {
  localStorage.removeItem('token')
  window.location.reload()
  cb()
}

export const isAuthorized = (): boolean => {
  return !!localStorage.getItem('token')
}
