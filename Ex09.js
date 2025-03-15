let books = [];
function generateId() {
    return Math.floor(10000000 + Math.random() * 90000000);
}
function addBook() {
    let quantity = +prompt("Nhập số lượng sách cần thêm:");
    for (let i = 0; i < quantity; ++i) {
        let title = prompt("Nhập tên sách:");
        let author = prompt("Nhập tên tác giả:");
        let year = +prompt("Nhập năm xuất bản:");
        let price = +prompt("Nhập giá sách:");

        if (isNaN(year) || isNaN(price) || price <= 0 || year <= 0) {
            alert("Dữ liệu không hợp lệ.");
            return;
        }

        let id = generateId();
        books.push({ id, title, author, year, price, isAvailable: true });
        alert("Thêm sách thành công!");
    }
}
function displayBooks() {
    if (books.length === 0) {
        alert("Thư viện hiện không có sách.");
        return;
    }
    alert("Danh sách sách:\n" + books.map(book =>
        `${book.id} - ${book.title} - ${book.author} - ${book.year} - ${book.price} - ${book.isAvailable ? "Có sẵn" : "Đang mượn"}`
    ).join("\n"));
}
function searchBook() {
    let title = prompt("Nhập tên sách cần tìm:").toLowerCase();
    let found = books.filter(book => book.title.toLowerCase().includes(title));

    if (found.length === 0) {
        alert("Không tìm thấy sách cần tìm.");
        return;
    }

    alert("Kết quả tìm kiếm:\n" + found.map(book =>
        `${book.id} - ${book.title} - ${book.author} - ${book.year} - ${book.price}`
    ).join("\n"));
}
function updateStatus() {
    let id = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
    let book = books.find(book => book.id === id);

    if (book) {
        book.isAvailable = !book.isAvailable;
        alert(`Trạng thái sách đã cập nhật thành: ${book.isAvailable ? "Có sẵn" : "Đang mượn"}`);
    } else {
        alert("Không tìm thấy sách có ID này.");
    }
}
function deleteBook() {
    let id = parseInt(prompt("Nhập ID sách cần xóa:"));
    let index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa sách "${books[index].title}"?`);
        if (confirmDelete) {
            books.splice(index, 1);
            alert("Xóa sách thành công.");
        }
    } else {
        alert("Không tìm thấy sách có ID này.");
    }
}
function sortBooks() {
    books.sort((a, b) => a.price - b.price);
    alert("Sách đã được sắp xếp theo giá tăng dần.");
    displayBooks();
}
let choice;
do {
    choice = +prompt("Chọn chức năng:\n" +
        "1. Thêm sách mới\n" +
        "2. Hiển thị danh sách sách\n" +
        "3. Tìm kiếm sách theo tiêu đề\n" +
        "4. Cập nhật trạng thái mượn/trả sách\n" +
        "5. Xóa sách theo ID\n" +
        "6. Sắp xếp sách theo giá tăng dần\n" +
        "7. Thoát\n" +
        "Nhập lựa chọn:");
    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            updateStatus();
            break;
        case 5:
            deleteBook();
            break;
        case 6:
            sortBooks();
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 7);
