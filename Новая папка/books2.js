// Создаем объект, представляющий каталог
let catalog = {
    name: "Каталог",
    subdirectories: [
      {
        name: "Книги",
        subdirectories: [
          {
            name: "Художественная литература",
            subdirectories1: [
                {
                  name: "Фантастика",
                  subdirectories: []
                },
                {
                  name: "Современная проза",
                  subdirectories: []
                },
                {
                  name: "Исторические романы",
                  subdirectories: []
                }
            ]
          },

          {
            name: "Детские книги",
            subdirectories2: [
              {
                name: "Детская художественая литература",
                subdirectories: []
              },
              {
                name: "Медицина для родителей",
                subdirectories: []
              },
              {
                name: "Детская познавательная литература",
                subdirectories: []
              }
            ]
          },

          {
            name: "Книги на иностранных язых",
            subdirectories3: [
              {
                name: "Книги на французском",
                subdirectories: []
              },
              {
                name: "Книги на немецком",
                subdirectories: []
              },
              {
                name: "Книги на других язых",
                subdirectories: []
              }
            ]
          }
        ]
      }
    ]
  };

  
  // Выводим результат
 console.log(catalog);
  