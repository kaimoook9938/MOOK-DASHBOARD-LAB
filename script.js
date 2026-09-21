// ==========================
// MOOK Dashboard Lab v1.0
// Sprint 1 : Basic JavaScript
// ==========================

// ดึง element ที่จะแสดงวันที่
const todayDate = document.getElementById("todayDate");

// สร้างวันที่ปัจจุบัน
const today = new Date();

// แสดงวันที่
todayDate.textContent = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

// ==========================
// Sprint 2 : Add Employee
// ==========================

// กล่องเก็บข้อมูลพนักงาน
//const employees = [];

// ชื่อพื้นที่เก็บข้อมูลใน Browser
const STORAGE_KEY = "mook-dashboard-employees";
let nextEmployeeId = 1;

// โหลดข้อมูลเก่าจาก Browser
const employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
if (employees.length > 0) {
    nextEmployeeId = Math.max(
        ...employees.map(emp => Number(emp.id.replace("E", "")))
    ) + 1;
}

// ดึง input จาก HTML
const empName = document.getElementById("empName");
const empPosition = document.getElementById("empPosition");
const empDepartment = document.getElementById("empDepartment");

// Table
const employeeTable = document.getElementById("employeeTable");

// KPI Cards ⭐ เพิ่มตรงนี้
const totalEmployees = document.getElementById("totalEmployees");
const totalDepartments = document.getElementById("totalDepartments");
const totalDevelopers = document.getElementById("totalDevelopers");


// ฟังก์ชันเมื่อกดปุ่ม Add Employee
function addEmployee() {

    const employee = {
        id: `E${nextEmployeeId++}`,
        name: empName.value,
        position: empPosition.value,
        department: empDepartment.value
    };

employees.push(employee);

// บันทึกลง Browser
localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));

renderEmployees();
updateDashboard();
updateDashboard();

}
function renderEmployees() {

    // ล้างข้อมูลเก่าในตารางก่อน
    employeeTable.innerHTML = "";

    // วนลูปพนักงานทุกคน
    employees.forEach((employee,index) => {

        employeeTable.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <td>
                    <button onclick="deleteEmployee(${index})">🗑️</button>
            </tr>
        `;

    });

}

function deleteEmployee(index) {

    employees.splice(index, 1);

    renderEmployees();

}

// แสดงข้อมูลที่เคยบันทึกไว้เมื่อเปิดเว็บ
renderEmployees();
updateDashboard();

// ===== อัปเดต Dashboard KPI =====
function updateDashboard() {

    // จำนวนพนักงานทั้งหมด
    totalEmployees.textContent = employees.length;

    // จำนวนแผนก (ไม่นับซ้ำ)
    const departments = new Set(
        employees.map(emp => emp.department)
    );

    totalDepartments.textContent = departments.size;

    // จำนวน Developer
    const developers = employees.filter(emp =>
        emp.position.toLowerCase().includes("developer")
    );

    totalDevelopers.textContent = developers.length;
}