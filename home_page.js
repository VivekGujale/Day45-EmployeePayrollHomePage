window.addEventListener('DOMContentLoaded', (even) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
                <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="D:/Testing/delete-black-18dp.svg">
                    <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" src="D:/Testing/create-black-18dp.svg">
                </td>
                </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollList = [
        {
            _name: "Sandip Kengar",
            _gender: "Male",
            _department: ["ENGINEER"],
            _salary: "600000",
            _startDate: "25 December 2021",
            _notes: "",
            _profilePic: "D:/Testing/ph4.png"
        },
        {
            _name: "Reshma Jadhav",
            _gender: "Female",
            _department: ["FINANCE", "HR"],
            _salary: "500000",
            _startDate: "21 May 2020",
            _notes: "",
            _profilePic: "D:/Testing/ph1.png"
        },
        {
            _name: "Rahul Vaidya",
            _gender: "Male",
            _department: ["SALES", "HR"],
            _salary: "400000",
            _startDate: "5 April 2020",
            _notes: "",
            _profilePic: "D:/Testing/ph5.png"
        }
    ];
    return empPayrollList;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div`
    }
    return deptHtml;
}