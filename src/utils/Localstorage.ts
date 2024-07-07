
export const saveData = (obj: object) => {
  localStorage.setItem('userData', JSON.stringify(obj));
}

export const getData = () => {
  const value = localStorage.getItem('userData');
  if(value === null) {
    return null
  } else {
    return JSON.parse(value)
  }
}