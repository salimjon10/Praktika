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
 <img src="images/Без названия (4).jpg" alt="Пример изображения" width="300" height="200">
        <p>Не пропустите акцию: скидка 20% на все <br> цитрусовые  до конца недели!</p>
         </div>

         <div class="aksiya">
 <img src="images/aksiya.png" alt="Пример изображения" width="300" height="200">
        <p>Не пропустите новогоднюю акцию!</p>
         </div>

 <div class="otkritie">
 <img src="images/Без названия (5).jpg" alt="Пример изображения" width="300" height="200">
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
        <p>Картошка    <button>+</button>  </p>
         <p> 51p</p>
    </div>
    <div class="image-block">
        <img src="images/kapusta.jpg" alt="Изображение 2">
        <p>Описание изображения 2</p>
    </div>
    <div class="image-block">
        <img src="images/ogures.jpg" alt="Изображение 2">
        <p>Описание изображения 2</p>
    </div>
    <div class="image-block">
        <img src="images/peres.jpg" alt="Изображение 2">
        <p>Описание изображения 2</p>
    </div>
</div>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});

fruitsBtn.addEventListener('click', () => {
    showContent(`
        <h2>Фрукты</h2>
        <ul>
            <li>Яблоки</li>
            <li>Бананы</li>
            <li>Апельсины</li>
            <li>Груши</li>
        </ul>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});

infoBtn.addEventListener('click', () => {
    showContent(`
        <h2>Контакты и график работы</h2>
        <p>Адрес: г. Кемерово, пр.Московский, д. 11</p>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Почта: fruktaym11@mail.ru</p>
        <p>График работы: Пн-Пт 09:00 - 20:00, Сб-Вс 10:00 - 18:00</p>
        <button class="backBtn" onclick="showMap()">На главную</button>
    `);
});
