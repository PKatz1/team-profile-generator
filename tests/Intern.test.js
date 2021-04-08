
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

describe('Intern', () => {

    describe('Initialization', () => {


        it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
        
            const intern = new Intern ();
           
            expect(intern instanceof Intern).toBeTruthy()
        });

        
        it('sets name property based on constructor argument', () => {
            const name = "Phil";
            const intern = new Intern(name);

            expect(intern.name).toBe(name);
        });
       
        it('sets id property based on constructor argument', () => {
            const id = "1";
            const intern = new Intern("", id);

            expect(intern.id).toBe(id);
        });
       
        it('sets email property based on constructor argument', () => {
            const email = "phil@phil.com";
            const intern = new Intern("", 0, email);
            expect(intern.email).toBe(email);
        });
    })
   
    describe('getName', () => {
      
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const intern = new Intern(name);

            expect(intern.getName()).toBe(name);
        });
    })

   
    describe('getId', () => {
      
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const intern = new Intern("", id);

            expect(intern.getId()).toBe(id);
        });
    })

    describe('getEmail', () => {
     
        it('returns the email property when the getEmail method is called', () => {
            const email = 'phil@phil.com';
            const intern = new Intern("", 0, email);

            expect(intern.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        
        it("returns 'Intern' when the getRole method is called", () => {
            const intern = new Intern();

            expect(intern.getRole()).toBe('Intern');
        });
    });
});