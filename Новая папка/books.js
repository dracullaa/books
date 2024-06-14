document.addEventListener('DOMContentLoaded', function() {
    fetch('/ip/books') 
        .then(response => response.json())
        .then(data => {
            const booksDiv = document.getElementById('books');
            data.books.forEach(book => {
                const bookDiv = document.createElement('div');
                bookDiv.className = 'book';
                bookDiv.setAttribute('data-id', book.id);
                bookDiv.innerHTML = `
                    <h2>${book.title}</h2>
                    <p class="author"><strong>Автор:</strong> ${book.author}</p>
                    <p class="price"><strong>Цена:</strong> ${book.price}р</p>
                    <p class="stock"><strong>Издатель:</strong> ${book.stock}</p>
                    <button class="edit-book" data-id="${book.id}">&#9998</button>
                `;
                
                bookDiv.addEventListener('click', function(event) {
                    if (event.target.classList.contains('edit-book')) {
                        event.stopPropagation();
                        const newTitle = prompt('Введите новое название книги:', book.title);
                        const newAuthor = prompt('Введите нового автора книги:', book.author);
                        const newPrice = prompt('Введите новую цену книги:', book.price);
                        const newStock = prompt('Введите новый издателя книги:', book.stock);

                        if (newTitle && newAuthor && newPrice && newStock) {
                            const updatedData = {
                                title: newTitle,
                                author: newAuthor,
                                price: parseFloat(newPrice),
                                stock: parseInt(newStock)
                            };
                            updateBook(book.id, updatedData);
                        }
                    } else {
                        bookDiv.classList.add('active');
                        bookDiv.style.backgroundColor = 'lightgreen';
                        addToCart(book.id, 1);
                    }
                });
                
                bookDiv.addEventListener('mouseenter', function() {
                    bookDiv.style.backgroundColor = 'lightblue';
                });

                bookDiv.addEventListener('mouseleave', function() {
                    bookDiv.style.backgroundColor = '';
                });

                booksDiv.appendChild(bookDiv);
            });
        })
        .catch(error => console.error('Ошибка при получении данных:', error));

    function addToCart(bookId, quantity) {
        fetch('/ip/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                book_id: bookId,
                quantity: quantity
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log('Ответ сервера:', data.message);
            } else {
                console.error('Ошибка при добавлении в корзину:', data);
            }
        })
        .catch(error => console.error('Ошибка при отправке запроса:', error));
    }

    function updateBook(bookId, updatedData) {
        fetch(`/ip//books/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json().then(data => {
            if (response.ok) {
                console.log(data.message);
                const bookDiv = document.querySelector(`.book[data-id="${bookId}"]`);
                if (bookDiv) {
                    bookDiv.querySelector('h2').textContent = updatedData.title;
                    bookDiv.querySelector('p.author').textContent = `Автор: ${updatedData.author}`;
                    bookDiv.querySelector('p.price').textContent = `Цена: ${updatedData.price}р`;
                    bookDiv.querySelector('p.stock').textContent = `Издатель: ${updatedData.stock}`;
                }
            } else {
                console.error('Ошибка:', data.message);
            }
        }))
        .catch(error => {
            console.error('Ошибка при обновлении данных книги:', error);
        });
    }

    document.getElementById('view-cart').addEventListener('click', function() {
        fetch('/ip/cart')
            .then(response => response.json())
            .then(data => {
                const cartDiv = document.getElementById('cart');
                const cartItemsDiv = document.getElementById('cart-items');
                cartItemsDiv.innerHTML = '';
    
                if (data.cart.length === 0) {
                    cartItemsDiv.innerHTML = '<p>Корзина пуста</p>';
                } else {
                    data.cart.forEach(item => {
                        const itemDiv = document.createElement('div');
                        itemDiv.className = 'cart-item';
                        itemDiv.innerHTML = `
                            <p><strong>Название:</strong> ${item.title}</p>
                            <p><strong>Количество:</strong> ${item.quantity}</p>
                            <p><strong>Цена:</strong> ${item.price}р</p>
                            <button class="remove-item" data-id="${item.id}">✖️</button>
                        `;
                        cartItemsDiv.appendChild(itemDiv);
                    });
                    document.querySelectorAll('.remove-item').forEach(button => {
                        button.addEventListener('click', function() {
                            const bookId = this.getAttribute('data-id');
                            removeFromCart(bookId);
                        });
                    });
                }
    
                if (cartDiv.style.display === 'block') {
                    cartDiv.style.display = 'none';
                } else {
                    cartDiv.style.display = 'block';
                }
            })
            .catch(error => console.error('Ошибка при получении данных корзины:', error));
    });

    function removeFromCart(bookId) {
        fetch(`/ip/cart/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log('Ответ сервера:', data.message);
                alert('Книга удалена из корзины');
                document.getElementById('view-cart').click();
            } else {
                console.error('Ошибка при удалении из корзины:', data);
            }
        })
    }

    document.getElementById('checkout').addEventListener('click', function() {
        fetch('/ip/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log('Ответ сервера:', data.message);
                const responseData = data;
                alert('Заказ оформлен успешно');
                alert('Оплаченная сумма: ' + responseData.order.total_amount + 'р');
                document.getElementById('cart-items').innerHTML = '';
                document.getElementById('cart').style.display = 'none';
            } else {
                console.error('Ошибка при оформлении заказа:', data);
            }
        })
        .catch(error => console.error('Ошибка при отправке запроса:', error));
    });
});
