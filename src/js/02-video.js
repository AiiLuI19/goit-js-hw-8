
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
// Variables
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";
// начни отслеживать событие timeupdate - обновление времени воспроизведения.

// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.   
player.on('timeupdate', throttle((currentTime) => {
  const valueTime = currentTime.seconds;
  // Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
  localStorage.setItem(STORAGE_KEY, JSON.stringify(valueTime))
}, 1000)
);

// 6.При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY))).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            // some other error occurred
            break;
    }
});

