import storeName from './initialState/storeName'


export const getLocalStore = () => {
  try {
    return JSON.parse(localStorage[storeName])
  } catch (e) {
    return {}
  }
}

export const setLocalStore = (object) => {
  localStorage[storeName] = JSON.stringify(object)
}

export const getLanguage = () => {
  // initilize language
  if (!localStorage.TargetsManagement_Language) {
    localStorage.TargetsManagement_Language = 'zh'
  }
  return localStorage.TargetsManagement_Language
}

export const setLanguage = language => {
  localStorage.TargetsManagement_Language = language
}