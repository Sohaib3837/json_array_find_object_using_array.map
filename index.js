
var E_ID

let empArray = [
  {

    "employee": {
      "employee_ID": 16,
      "employee_designation": "Node.js",
      "employee_FirstName": "John",
      "employee_lastName": "Doe",
    }
  },
  {
    "employee": {
      "employee_ID": 17,
      "employee_designation": "Full Stack",
      "employee_FirstName": "Samual",
      "employee_lastName": "Smith",
    },
  }
]
function search_EmployeeByID(E_ID) {
  empArray.find(item => {
    if (item.employee.employee_ID == E_ID) {
      console.log(item.employee)
      return true
    }else{
      console.log("not found")
      return false
    }
  })
}
E_ID = parseInt(prompt("Enter Employee_ID to search for:"))
search_EmployeeByID(E_ID);

