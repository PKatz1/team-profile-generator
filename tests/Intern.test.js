//require Employee module - which we will be testing in this suite
//call the constructor
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');


//describe Intern
describe('Intern', () => {

    //describe Initialization
    describe('Initialization', () => {


        //test that it returns an object that is an instance of the Employee class when called with the new keyword
        it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
            //call the constructor
            const intern = new Intern ();
            //check that it is an instance of Employee
            expect(intern instanceof intern).toBeTruthy()
        });

        //test that it sets name property based on constructor argument
        //define a name for the test
        //call constructor with test name
        //check that the resulting name property is equal to the test id
        it('sets name property based on constructor argument', () => {
            const name = "Phil";
            const intern = new Intern(name);

            expect(intern.name).toBe(name);
        });
        //test that it sets id property based on constructor argument
        //define an id for the test
        //call constructor with an empty string for the name arg and  the test id
        //check that the resulting id property is equal to the test id
        it('sets id property based on constructor argument', () => {
            const id = "1";
            const intern = new Intern("", id);

            expect(intern.id).toBe(id);
        });
        //test that it sets email property based on constructor argument
        //define an email for the test
        //call constructor with an empty string for the name arg, any number for the id
        //check that the resulting email property is equal to the test email
        it('sets email property based on constructor argument', () => {
            const email = "phil@phil.com";
            const intern = new Intern("", 0, email);
            expect(intern.email).toBe(email);
        });
    })
    //describe getName
    describe('getName', () => {
        //test that it returns the name property when the getName() method is called
        //define a name for the test
        //call constructor with the test name
        //call the getName() method and check that the result equals the test name
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const intern = new Intern(name);

            expect(intern.getName()).toBe(name);
        });
    })

    //describe getId
    describe('getId', () => {
        //test that it returns the id property when the getInfo() method is called
        //define an id for the test
        //call constructor with the test id
        //call the getId() method and check that the result equals the test id
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const intern = new Intern("", id);

            expect(intern.getId()).toBe(id);
        });
    })

    //describe getEmail
    describe('getEmail', () => {
        //test that it returns the email property when the getEmail() method is called
        //define an email for the test
        //call constructor with the test email
        //call the getEmail() method and check that the result equals the test email
        it('returns the email property when the getEmail method is called', () => {
            const email = 'phil@phil.com';
            const intern = new Intern("", 0, email);

            expect(intern.getEmail()).toBe(email);
        });
    });

    //describe getRole
    describe('getRole', () => {
        //test that it returns the role property when the getRole() method is called
        //define an role for the test
        //call constructor with the test role
        //call the getEmail() method and check that the result equals the test role
        it("returns 'Employee' when the getRole method is called", () => {
            const intern = new Intern();

            expect(intern.getRole()).toBe('Intern');
        });
    });
});