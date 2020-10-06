// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id , email) {
        // console.log(`Employee constructor: ${name} ${id} ${email}`);
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() { 
        return "Employee";
    }

    getIcon(){
        return '<i class="fa fa-user"></i>';
    }

}
  
module.exports = Employee;