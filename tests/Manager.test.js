
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');


describe('Manager', () => {

    describe('Initialization', () => {

        it('returns an object that is an instance of the Manager
         class when called with the new keyword', () => {
           
            const manager = new Manager();
            
            expect(manager instanceof Manager).toBeTruthy()
        });

        it('sets name property based on constructor argument', () => {
            const name = "Phil";
            const manager = new Manager(name);

            expect(manager.name).toBe(name);
        });
      
        it('sets id property based on constructor argument', () => {
            const id = "1";
            const manager = new Manager("", id);

            expect(manager.id).toBe(id);
        });
     

        it('sets email property based on constructor argument', () => {
            const email = "phil@phil.com";
            const manager = new Manager("", 0, email);
            expect(manager.email).toBe(email);
        });
    })
   
    describe('getName', () => {
        
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const manager = new Manager(name);

            expect(manager.getName()).toBe(name);
        });
    })

    
    describe('getId', () => {
        
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const manager = new Manager("", id);

            expect(manager.getId()).toBe(id);
        });
    })

    
    describe('getEmail', () => {
        
        it('returns the email property when the getEmail method is called', () => {
            const email = 'phil@phil.com';
            const manager = new Manager("", 0, email);

            expect(manager.getEmail()).toBe(email);
        });
    });

    
    describe('getRole', () => {
    
        it("returns 'Manager' when the getRole method is called", () => {
            const manager = new Manager();

            expect(manager.getRole()).toBe('Manager');
        });
    });
});