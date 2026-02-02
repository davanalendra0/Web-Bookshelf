const STORAGE_KEY = "BOOKSHELF_APPS";
let books = [];

document.addEventListener("DOMContentLoaded", () => {
    loadData();

    document.getElementById("bookForm").addEventListener("submit", addBook);
    document.getElementById("searchBook").addEventListener("submit", searchBook);
});

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) books = JSON.parse(data);
    render();
}

function generateId() {
    return +new Date();
}

function addBook(e) {
    e.preventDefault();

    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = Number(document.getElementById("bookFormYear").value);
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    const book = {
        id: generateId(),
        title,
        author,
        year,
        isComplete,
    };

    books.push(book);

    saveData();
    render();
    e.target.reset();
}

function searchBook(e) {
    e.preventDefault();

    const keyword = document
        .getElementById("searchBookTitle")
        .value.toLowerCase();

    const filtered = books.filter((b) =>
        b.title.toLowerCase().includes(keyword)
    );

    render(filtered);
}

function render(filteredBooks = books) {
    const incomplete = document.getElementById("incompleteBookList");
    const complete = document.getElementById("completeBookList");

    incomplete.innerHTML = "";
    complete.innerHTML = "";

    filteredBooks.forEach((book) => {
        const element = createBookElement(book);

        if (book.isComplete) complete.append(element);
        else incomplete.append(element);
    });
}

function createBookElement(book) {
    const container = document.createElement("div");
    container.setAttribute("data-bookid", book.id);
    container.setAttribute("data-testid", "bookItem");

    container.innerHTML = `
        <h3 data-testid="bookItemTitle">${book.title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
        <p data-testid="bookItemYear">Tahun: ${book.year}</p>
        <div>
        <button data-testid="bookItemIsCompleteButton">
            ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
        </button>
        <button data-testid="bookItemDeleteButton">Hapus Buku</button>
        <button data-testid="bookItemEditButton">Edit Buku</button>
        </div>
    `;

    const [toggleBtn, deleteBtn, editBtn] = container.querySelectorAll("button");

    toggleBtn.onclick = () => toggleBook(book.id);
    deleteBtn.onclick = () => deleteBook(book.id);
    editBtn.onclick = () => editBook(book.id);

    return container;
}

function toggleBook(id) {
    const book = books.find((b) => b.id === id);
    book.isComplete = !book.isComplete;

    saveData();
    render();
}

function deleteBook(id) {
    books = books.filter((b) => b.id !== id);

    saveData();
    render();
}

function editBook(id) {
    const book = books.find((b) => b.id === id);

    const newTitle = prompt("Judul baru:", book.title);
    const newAuthor = prompt("Penulis baru:", book.author);
    const newYear = prompt("Tahun baru:", book.year);

    if (newTitle && newAuthor && newYear) {
        book.title = newTitle;
        book.author = newAuthor;
        book.year = Number(newYear);

        saveData();
        render();
    }
}