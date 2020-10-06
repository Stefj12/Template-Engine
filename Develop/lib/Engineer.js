// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(name, id , email, github) {
        super(name, id, email);
        // console.log(`Engineer constructor: ${name} ${id} ${email} ${github}`);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){ 
        return this.github;
    }

    getIcon(){
        return '<i class="fa fa-code"></i>';
    }

}

module.exports = Engineer;