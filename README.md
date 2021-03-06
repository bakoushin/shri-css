Общая информация
================

CSS Grid
--------

Верстка основана на CSS Grid, что позовляет легко адаптировать количество колонок к разной ширине экрана.

Шрифты
------

Размеры шрифтов заданы в rem-ах, чтобы иметь возможность при адаптации под размер экрана изменять только размер базового шрифта.

Картинки
--------

1. Картинки тянутся по размеру контейнера.
2. Используется атрибут `object-fit: cover` для полного заполнения контейнера картинкой с сохранением пропорций.
3. В HTML используются атрибуты `srcset` и `sizes`.
4. На картинках выводится название канала. Из-за того, что сами картинки выгружены с названием канала, в этом месте немного грязно.

Заголовки
---------

Заголовки обрезаются, если занимают более 3-х строчек. По задумке дизайнера заголовок более 2-х строчек начинает отъедать верхнюю часть картинки. Считаем допустимым отъесть от картинки не более 1-й строчки, поэтому такое ограничение.
В браузерах на основе Webkit в этом случае отображается многоточие за счет `-webkit-line-clamp`. Элегантного кросс-браузерного решения найти не удалось.

Media Queries
=============

До 580px – Mobile
-----------------

Базовый шрифт `16px` – крупнее чем в исходном дизайне для удобства чтения с экрана мобильного.

Колонки отсутвуют. Каждая карточка отображается отдельной строкой.

Шрифт заголовков везде одинаковый.

Изменяется порядок отображения карточки размера `l`:
* Заголовок размещается сверху карточки
* Текст описания размещатся снизу карточки
* Элементы управления (actions и like) располагаются справа, аналогично карточке размера `m`

580px – Tablet
--------------

Базовый шрифт `14px`.

Карточки размеров `s` и `m` группируются в 2 колонки.

Шрифт заголовков по-прежнему везде одинаковый.

Карточка размера `l` теперь выделяется среди других – по-прежнему занимает целую строчку и сохраняет изменения в отображении для мобильных экранов.

790px - Laptop
--------------

Исходный дизайн.

Базовый шрифт `14px`.

Перестановок элементов нет.

1200px - Large screen
---------------------

Все просто немного увеличивается в масштабе (шрифт, ширина грида, высота строк).

Базовый шрифт `18px`.

Перестановок элементов нет.
