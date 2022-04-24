export const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  } return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
};

export default getResponseData;