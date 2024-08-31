import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
    test('should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ');
    });

    test('should contain a {{name}} and {{orderId}}', () => {
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    });
});
