let employees = [];
function generateId() {
    return Math.floor(10000000 + Math.random() * 90000000);
}
function addEmployee() {
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí công việc:");
    let salary = parseFloat(prompt("Nhập mức lương:"));
    if (isNaN(salary) || salary <= 0) {
        alert("Mức lương không hợp lệ.");
        return;
    }
    let id = generateId();
    employees.push({ id, name, position, salary: salary.toFixed(2) });
    alert("Thêm nhân viên thành công!");
    console.log(employees);
}
function deleteEmployee() {
    let id = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${employees[index].name}?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            alert("Xóa nhân viên thành công.");
            console.log(employees);
        }
    } else {
        alert("Không tìm thấy nhân viên có ID này.");
    }
}
function updateSalary() {
    let id = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương:"));
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        let newSalary = parseFloat(prompt("Nhập mức lương mới:"));
        if (isNaN(newSalary) || newSalary <= 0) {
            alert("Mức lương không hợp lệ.");
            return;
        }
        if (parseFloat(employee.salary) === newSalary) {
            alert("Mức lương mới không được trùng với mức lương cũ.");
            return;
        }
        employee.salary = newSalary.toFixed(2);
        alert("Cập nhật lương thành công!");
        console.log(employees);
    } else {
        alert("Không tìm thấy nhân viên có ID này.");
    }
}
function searchEmployee() {
    let name = prompt("Nhập tên nhân viên cần tìm:").toLowerCase();
    let found = employees.filter(emp => emp.name.toLowerCase().includes(name));
    if (found.length > 0) {
        alert("Nhân viên tìm thấy:\n" + found.map(emp => `${emp.id} - ${emp.name} - ${emp.position} - ${emp.salary}`).join("\n"));
    } else {
        alert("Không tìm thấy nhân viên nào.");
    }
}

let choice;
do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Thêm nhân viên mới\n" +
        "2. Xóa nhân viên theo ID\n" +
        "3. Cập nhật lương nhân viên\n" +
        "4. Tìm kiếm nhân viên theo tên\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn:"));
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);