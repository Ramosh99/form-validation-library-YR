const FormValidator = require('../src/index');

describe('FormValidator', () => {
  it('should validate required fields', () => {
    const rules = {
      username: { required: true },
    };
    const validator = new FormValidator(rules);
    const formData = { username: '' };
    const errors = validator.validate(formData);
    expect(errors.username).toBe('username is required');
  });

  it('should validate pattern', () => {
    const rules = {
      email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    };
    const validator = new FormValidator(rules);
    const formData = { email: 'invalid-email' };
    const errors = validator.validate(formData);
    expect(errors.email).toBe('email is not valid');
  });
});
