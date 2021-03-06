
const Employee = require('../lib/Employee')



describe('Employee', () => {

    describe('Initialization', () => {


       
        it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
            
            const employee = new Employee();
            
            expect(employee instanceof Employee).toBeTruthy()
        });

    
        it('sets name property based on constructor argument', () => {
            const name = "Phil";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });
        
        it('sets id property based on constructor argument', () => {
            const id = "1";
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        });
       
        it('sets email property based on constructor argument', () => {
            const email = "phil@phil.com";
            const employee = new Employee("", 0, email);
            expect(employee.email).toBe(email);
        });
    })
   
    describe('getName', () => {
      
        it('returns the name property when the getName() method is called', () => {
            const name = "Obi";
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        });
    })

  
    describe('getId', () => {
       
        it('returns the id property when the getId() method is called', () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.getId()).toBe(id);
        });
    })


    describe('getEmail', () => {
        
        it('returns the email property when the getEmail method is called', () => {
            const email = 'phil@phil.com';
            const employee = new Employee("", 0, email);

            expect(employee.getEmail()).toBe(email);
        });
    });

  
    describe('getRole', () => {
       
        it("returns 'Employee' when the getRole method is called", () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe('Employee');
        });
    });
});