const categories1 = {
    book4: {
      local: "images/book4.jpg",
      external: "https://content.img-gorod.ru/nomenclature/30/101/3010155-6.jpg?width=304&height=438&fit=bounds"
    },
    // Add more images here using the same pattern
    book3: {
        local: "images/book3.jpg",
        external: "https://content.img-gorod.ru/nomenclature/29/930/2993087-3.jpg?width=304&height=438&fit=bounds"
    },
    book2: {
        local: "images/book2.jpg",
        external: "https://content.img-gorod.ru/nomenclature/30/347/3034723-1.jpg?width=304&height=438&fit=bounds"
    },
    book1: {
        local: "images/book1.jpg",
        external: "https://content.img-gorod.ru/nomenclature/30/347/3034718-2.jpg?width=304&height=438&fit=bounds"
    }
};

// Получаем контейнер для изображений
const imageContainer = document.getElementById("imageContainer");

// Проходимся по каждому элементу в объекте categories1 и добавляем изображения на страницу
for (const key in categories1) {
    if (categories1.hasOwnProperty(key)) {
        const image = document.createElement("img");
        image.src = categories1[key].local; // Используйте .external для загрузки внешних изображений
        image.alt = key; // Устанавливаем атрибут alt
        imageContainer.appendChild(image); // Добавляем изображение в контейнер на странице
    }
}



const categories2 = {
    book4: {
      local: "images/book4.jpg",
      external: "https://content.img-gorod.ru/nomenclature/30/418/3041830-3.jpg?width=304&height=438&fit=bounds"
    },
    // Add more images here using the same pattern
    book3: {
        local: "images/book1.jpg",
        external: "https://content.img-gorod.ru/nomenclature/30/417/3041785-1.jpg?width=304&height=438&fit=bounds"
    },
    book2: {
        local: "images/book2.jpg",
        external: "https://content.img-gorod.ru/nomenclature/30/317/3031750-5.jpg?width=304&height=438&fit=bounds"
    },
    book1: {
        local: "images/book3.jpg",
        external: "https://content.img-gorod.ru/nomenclature/24/477/2447776-3.jpg?width=304&height=438&fit=bounds"
    }
};

for (const key in categories2) {
    if (categories2.hasOwnProperty(key)) {
        const image = document.createElement("img");
        image.src = categories2[key].local; // Используйте .external для загрузки внешних изображений
        image.alt = key; // Устанавливаем атрибут alt
        imageContainer.appendChild(image); // Добавляем изображение в контейнер на странице
    }
}
