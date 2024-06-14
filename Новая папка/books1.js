let catalog = {
    name: "Книги",
    //subdirectories: createSubdirectories("Subdir", 1,2, 3), // создаем подкаталоги до третьего уровня вложенности
    subdirectories1: "Художественная литература",
    subdirectories2: "Детские книги",
    subdirectories3: "Книги на иностранных языках"
  };

  function createSubdirectories1(name, depth, maxDepth) {
    let subdirectories1 = [];
  
    if (depth < maxDepth) {
      const categories = [
        "Фантастика",
        "Современная проза",
        "Исторические романы",
        // Add more categories here
      ];
  
      for (let i = 1; i <= 5; i++) { // Цикл для подкаталогов подкатегорий
        let subdirName = name + "_" + i;
        let subdir = {
          name: subdirName,
          subdirectories: []
        };
  
        for (let j = 0; j < categories1.length; j++) { // Вложенный цикл для категорий
          let categoryName = categories1[j];
          let categorySubdir = {
            name: categoryName,
            subdirectories: createSubdirectories1(categoryName, depth + 1, maxDepth), // Nested categories
            books: [
                {"title": "Девять царств: Госпожа Жемчужина", "publishinghouse": "АСТ", "price": 1000},
                {"title": "Последний Словотворец. Кровь Первых", "publishinghouse": "АСТ", "price": 850},
                {"title": "Баллада о змеях и певчих птицах", "publishinghouse": "Neoclassic", "price": 1200},
                {"title": "Дюна", "publishinghouse": "Neoclassic", "price": 1500}
              // Add more book items here for each category
            ]
          };
          subdir.subdirectories.push(categorySubdir);
        }

        for (let k = 0; k < categories2.length; k++) { // Вложенный цикл для категорий
          let categoryName = categories2[k];
          let categorySubdir = {
            name: categoryName,
            subdirectories: createSubdirectories1(categoryName, depth + 1, maxDepth), // Nested categories
            books: [
                {"title": "Прачечная, стирающая печали", "publishinghouse": "Кислород", "price": 950},
                {"title": "Непокорные", "publishinghouse": "Inspiria", "price": 1100},
                {"title": "Щегол", "publishinghouse": "Corpus", "price": 800},
                {"title": "Ночь дракона", "publishinghouse": "Popcorn Books", "price": 1300}
              // Add more book items here for each category
            ]
          };
          subdir.subdirectories.push(categorySubdir);
        }
  
        subdirectories.push(subdir);
      }
    }
  
    return subdirectories;
  }
  
  // Вызовите createSubdirectories1 для создания каталога
  let bookstore = createSubdirectories1("Книги", 0, 3); // Assuming the max depth is 3
  console.log(bookstore); // Print the created subcategories
  