//Book class: Represents a book
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}
//UI class:Handle UI tasks 
class UI{
    static displayBooks(){
        const StoredBooks =[
            {
                title:'Book One',
                author:'Fathy',
                isbn:"12345"            
            },
            {
                title:'Book Two',
                author:'Badr',
                isbn:'67890'
            }

        ];
    
        const books=StoredBooks;
        
        books.forEach((book) => UI.addBookToList(book));


            
        }
        static addBookToList(book){
            const list=document.querySelector('#book-list');

            const row =document.createElement('tr');
            

            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
            
            list.appendChild(row);

        }
        static deleteBook(el){
            if(el.classList.contains('delete')){
                el.parentElement.parentElement.remove();
            }

        }
        static clearField(){
            document.querySelector('#title').value='';
            document.querySelector('#author').value='';
            document.querySelector('#isbn').value='';

        }
    }




//Store class :Handles Storage

//Event :Display Books 
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Event:Add a Book

document.querySelector('#book-form').addEventListener('submit',(e)=> {
    //prevent actual submit
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instatiate book
    const book = new Book(title,author,isbn);

    UI.addBookToList(book);
    UI.clearField();

}
); 


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click',(e)=>
{
    UI.deleteBook(e.target);
});

