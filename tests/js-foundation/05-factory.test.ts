import { buildMakePerson } from '../../src/js-foundation/05-factory';
import { getAge } from '../../src/plugins/get-age.plugin';


describe('Factory Pattern', () => {

    const getUUID = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        
        expect(typeof makePerson).toBe('function');

    });

    test('makePerson should return a person object', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({name: "John Doe", birthdate: "1985-10-21"});

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 35
        });

    });

});