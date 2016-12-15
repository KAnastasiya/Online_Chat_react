/**
 * Генерация идентификатора
 * @param  {String} str Формат идентификатора
 * @return {String}
 */
export function generateId(str) {
  return str.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8 )).toString(16);
  });
}

/**
 * Преобразование даты и времени в строковое представление нужного формата
 * @param  {Date} datetime Дата и время
 * @return {String}
 */
export function formatTime(datetime) {
  let hours = datetime.getHours();
  let minutes = datetime.getMinutes();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}

/**
 * Проигрывание звука
 * @param  {String} src Путь к звуковому файлу
 */
export function playAudio(src) {
  const voice = new Audio();
  voice.src = src;
  voice.autoplay = true;
}
