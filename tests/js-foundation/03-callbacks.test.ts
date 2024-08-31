import { getUserById } from '../../src/js-foundation/03-callbacks';



describe('getUserById', () => {

    test('getUserByID should return an error if user is not found', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });

    })

    test('geUserByID should return the information of the user', (done) => {
            
            const id = 1;
            getUserById(id, (err, user) => {
                expect(err).toBeUndefined();
                expect(user).toEqual({ id: 1, name: 'John Doe' });
                done();
            });
            
    })

});

