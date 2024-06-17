class FormValidator {
  constructor(rules) {
    this.rules = rules;
  }

  validate(formData) {
    const errors = {};

    for (const field in this.rules) {
      const rules = this.rules[field];
      const value = formData[field];

      if (rules.required && !value) {
        errors[field] = `${field} is required`;
        continue;
      }
      if (rules.email && !this.validateEmail(value)) {
        errors[field] = `${field} is not a valid email address`;
        continue;
      }
      if (rules.integer && !this.validateInteger(value)) {
        errors[field] = `${field} is not a valid integer`;
        continue;
      }
      if (rules.pattern && !rules.pattern.test(value)) {
        errors[field] = `${field} is not valid`;
      }
      if (rules.string && !this.validateString(value)) {
        errors[field] = `${field} is not a string`;
      }
      if (rules.date && !this.validateDate(value, rules.allowFuture)) {
        errors[field] = `${field} is not a valid date`;
      }
    }
    return errors;
  }

  validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  validateInteger(integer) {
    const integerPattern = /^-?\d+$/;
    return integerPattern.test(integer);
  }
  validateString(string) {
    const stringPattern = /^[A-Za-z]+$/;
    return stringPattern.test(string);
  }
  validateDate(date, allowFuture) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      return false;
    }
    const dateObj = new Date(date);
    const now = new Date();
    // Reset time part to compare only dates
    dateObj.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if (!(dateObj instanceof Date) || isNaN(dateObj)) {
      return false;
    }

    if (!allowFuture && dateObj > now) {
      return false;
    }

    return true;
  }
}

module.exports = FormValidator;
