// Получаем кнопки и элементы контента
const newsBtn = document.getElementById('newsBtn');
const vegetablesBtn = document.getElementById('vegetablesBtn');
const fruitsBtn = document.getElementById('fruitsBtn');
const infoBtn = document.getElementById('infoBtn');
const mapContainer = document.getElementById('mapContainer');
const content = document.getElementById('content');

// Функция для отображения контента
function showContent(htmlContent) {
    mapContainer.classList.add('hidden'); // Скрываем карту
    content.classList.remove('hidden'); // Показываем контент
    content.innerHTML = htmlContent;
}

// Сброс к главной странице с картой
function showMap() {
    content.classList.add('hidden'); // Скрываем контент
    mapContainer.classList.remove('hidden'); // Показываем карту
}

// Обработчики событий для кнопок
newsBtn.addEventListener('click', () => {
    showContent(`
    <div class="container2">
        <div class="citrus">
 <img src="images/Без названия (4).jpg" alt="Пример изображения" width="400" height="400">
        <p>Не пропустите акцию: скидка 20% на <br> все цитрусовые  до конца недели!</p>
         </div>

         <div class="aksiya">
 <img src="images/aksiya.png" alt="Пример изображения" width="300" height="200">
        <p>Не пропустите новогоднюю акцию!</p>
         </div>

 <div class="otkritie">
 <img src="images/images.jpg" alt="Пример изображения" width="300" height="200">
        <p>Cкоро открытие нашего 2го магазина ураа!</p>
         </div>
</div>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});



vegetablesBtn.addEventListener('click', () => {
    showContent(`
       <div class="container1">
    <div class="image-block">
        <img src="images/kartoshka.jpg" alt="Изображение 1">
        <p>Картошка </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/kapusta.jpg" alt="Изображение 2">
       <p>Капуста</p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/ogures.jpg" alt="Изображение 2">
       <p>Огурец </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/peres.jpg" alt="Изображение 2">
          <p>Перец </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
</div>
 
<div class="container3">
    <div class="image-block">
        <img src="images/chesna.jpg" alt="Изображение 1">
         <p>Чеснок </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/luk.jpg" alt="Изображение 2">
          <p>Лук </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/помидоры.jpg" alt="Изображение 2">
        <p>Помидоры </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/морковь.jpg" alt="Изображение 2">
         <p>Морковь мытая </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
</div>

<div class="container3">
    <div class="image-block">
        <img src="images/zelperes.jpg" alt="Изображение 1">
        <p>Перец зеленый </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/krluk.jpg" alt="Изображение 2">
         <p>Лук красный </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/tkva.jpg" alt="Изображение 2">
        <p>Тыква </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/baklazhan.jpg" alt="Изображение 2">
          <p>Баклажаны </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
</div>

<div class="container3">
    <div class="image-block">
        <img src="images/rediska.jpg" alt="Изображение 1">
        <p>Редиска </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/kabachki.jpg" alt="Изображение 2">
         <p>Кабачки </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/osperes.jpg" alt="Изображение 2">
         <p>Острый перец </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/pomcheri.jpg" alt="Изображение 2">
         <p>Помидоры черри</p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
</div>

<div class="container3">
    <div class="image-block">
        <img src="images/kukuruza.jpg" alt="Изображение 1">
        <p>Кукуруза </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/nemarkovka.jpg" alt="Изображение 2">
         <p>Морковь немытая </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/svekla.jpg" alt="Изображение 2">
         <p>Свекла</p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/kitkapusta.jpg" alt="Изображение 2">
         <p>Китайская капуста </p>
        <p>цена за 1кг </p>
         <p>38р</p>
         <button>в корзину</button>
    </div>
</div>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});

fruitsBtn.addEventListener('click', () => {
    showContent(`
        <div class="container1">
    <div class="image-block">
        <img src="images/banan.jpg" alt="Изображение 1">
       <p>Бананы </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/ananas.jpg" alt="Изображение 2">
      <p>Ананас </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/granat.jpg" alt="Изображение 2">
      <p>Гранат </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/arbuz.jpg" alt="Изображение 2">
         <p>Арбуз </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
</div>
 
<div class="container2">
    <div class="image-block">
        <img src="images/klubnika.jpg" alt="Изображение 1">
        <p>Клубника </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/vinograd.jpg" alt="Изображение 2">
        <p>Виноград зеленый </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/mango.jpg" alt="Изображение 2">
        <p>Манго </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/vishnya.jpg" alt="Изображение 2">
         <p>Вишня </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
</div>

<div class="container3">
    <div class="image-block">
        <img src="images/yabloki.jpg" alt="Изображение 1">
        <p>Яблоко </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/grusha.jpg" alt="Изображение 2">
         <p>Груша </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/mandarin.jpg" alt="Изображение 2">
       <p>Мандарин </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/persik.jpg" alt="Изображение 2">
         <p>Персик</p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
</div>

 <div class="container1">
    <div class="image-block">
        <img src="images/dnya.jpg" alt="Изображение 1">
       <p>Дыня</p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/kivi.jpg" alt="Изображение 2">
      <p>Киви </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/sliva.jpg" alt="Изображение 2">
     <p>Слива</p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/laym.jpg" alt="Изображение 2">
        <p>Лайм</p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
</div>

<div class="container2">
    <div class="image-block">
        <img src="images/zelyabloko.jpg" alt="Изображение 1">
        <p>Яблоко зеленое </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/krvinograd.jpg" alt="Изображение 2">
       <p>Красный виноград </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
    <div class="image-block">
        <img src="images/limon.jpg" alt="Изображение 2">
        <p>Лимон </p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
     <div class="image-block">
        <img src="images/malina.jpg" alt="Изображение 2">
         <p>Малина</p>
        <p>цена за 1кг </p>
         <p>38р</p>  
         <button>в корзину</button>
    </div>
</div>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});

infoBtn.addEventListener('click', () => {
    showContent(`
        <h2>Контакты и график работы</h2>
  <img src="images/фруктайм.png" alt="">
        <p>Адрес: г. Кемерово, пр.Московский, д. 11</p>
        <p>Телефон: +7 (913) 297-32-34</p>
        <p>Почта: fruktaym11@mail.ru</p>
        <p>График работы: Ежедневно с 09:00 - 21:00</p>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});
