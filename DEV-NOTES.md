# 🧪 MOOK Dashboard Lab

> สมุดโน้ต DEV ของไข่มุก

---

## Sprint 1 — HTML Layout

### HTML

- `header` = ส่วนหัวของเว็บ
- `main` = เนื้อหาหลัก
- `section` = แบ่งเนื้อหาเป็นส่วน ๆ
- `table` = ตารางข้อมูล

### CSS

- `display: flex` = จัดเรียงแนวนอน
- `display: grid` = จัดเรียงเป็นการ์ดหลายใบ
- `box-shadow` = เงาของกล่อง

### JavaScript

- `getElementById()` = หา element จาก id
- `new Date()` = วันที่ปัจจุบัน
- `toLocaleDateString()` = แปลงวันที่ให้อ่านง่าย

---

## สิ่งที่ได้เรียนวันนี้

- HTML ทำโครงสร้าง
- CSS ทำหน้าตา
- JavaScript ทำให้เว็บมีการทำงาน
## Sprint 3 — CRUD + LocalStorage

### วันนี้เรียนรู้

- Array เก็บข้อมูลพนักงาน
- Object คือข้อมูลของพนักงาน 1 คน
- renderEmployees() มีหน้าที่วาดตารางใหม่
- LocalStorage ทำให้ข้อมูลไม่หายหลัง Refresh
- ID ไม่ควรใช้ employees.length เพราะจะซ้ำหลังลบ

### Bug ที่เจอ

- renderEmployees is not defined
- ID ซ้ำหลัง Delete

### วิธีแก้

- สร้าง function renderEmployees()
- ใช้ nextEmployeeId แทน employees.length