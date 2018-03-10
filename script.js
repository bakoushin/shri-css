'use strict';

(function() {

  const main = document.querySelector('.main');
  const templates = {
    's-text': document.getElementById('template-s-text').innerHTML,
    's-picture': document.getElementById('template-s-picture').innerHTML,
    m: document.getElementById('template-m').innerHTML,
    l: document.getElementById('template-l').innerHTML
  }
  
  main.innerHTML = '';

  data.forEach(renderItem);

  function renderItem(item) {
    let html = getTemplate(item);
    for (let key in item) {
      html = substitute(html, key, item);
    }

    if (item.image) {
      const [imageName, imageExtension] = item.image.split('.');
      const imageData = {imageName, imageExtension};
      html = substitute(html, 'imageName', imageData);
      html = substitute(html, 'imageExtension', imageData);
    }

    if (!item.channelName) {
      html = substitute(html, 'channelName', {channelName: getRandomChannelName()});
    }

    const el = document.createElement('div');
    el.classList.add('article');
    el.classList.add('article--' + item.size);
    el.innerHTML = html;
    main.appendChild(el);
  }

  function getTemplate(item) {
    let postfix = '';
    if (item.size == 's') {
      postfix = item.image ? '-picture' : '-text';
    }
    return templates[item.size + postfix];
  }

  function substitute(string, key, data) {
    const templateKey = new RegExp('{{' + key + '}}', 'g');
    return string.replace(templateKey, data[key]);
  }

  function getRandomChannelName() {
    const words = 'Меркурий Венера Земля Марс Юпитер Сатурн Уран Нептун Плутон'.split(' ');
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

})();