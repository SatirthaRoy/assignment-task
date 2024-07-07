
export const saveData = (obj: object) => {
  localStorage.setItem('userData', JSON.stringify(obj));
}

export const getData = () => {
  return JSON.parse(localStorage.getItem('userData')) || null;
}