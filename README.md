
# form-validation-library-yr

A simple and customizable form validation library for JavaScript. It provides built-in validators for common form fields and supports custom validation logic.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Constructor](#constructor)
  - [validate](#validate)
  - [Custom Validators](#custom-validators)
- [Built-in Validators](#built-in-validators)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the library using npm:

````````````````bash
npm install form-validation-library-yr
````````````````

Or using yarn:

````````````````bash
yarn add form-validation-library-yr
`````````````````

## Usage

First, import the library and create an instance of `FormValidator` with your validation rules:

`````````````````javascript
import FormValidator from 'form-validation-library-yr';

const rules = {
  username: { required: true },
  email: { required: true, email: true },
  age: { required: true, integer: true },
  birthdate: { required: true, date: true, allowFuture: false },
};

const validator = new FormValidator(rules);

const formData = {
  username: 'JohnDoe',
  email: 'john.doe@example.com',
  age: '25',
  birthdate: '1995-05-15',
};

const errors = validator.validate(formData);
console.log(errors);
`````````````````

## API

### Constructor

`````````````````javascript
new FormValidator(rules)
`````````````````

- `rules` (Object): An object defining the validation rules for each field.

### validate

`````````````````javascript
validate(formData)
`````````````````

- `formData` (Object): An object containing the form data to be validated.
- Returns: An object containing validation errors, where the keys are the field names and the values are the error messages.

### Custom Validators

You can define custom validation logic by providing a custom validator function in the rules:

`````````````````javascript
const rules = {
  birthdate: { 
    required: true, 
    date: true`````````````````
    custom: { 
      validator: (value) => {
        const dateObj = new Date(value);
        const now = new Date();
        dateObj.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);
        return dateObj <= now;
      }, 
      message: 'Birthdate must be a past date'
    } 
  },
};
```

## Built-in Validators

The library includes several built-in validators:

- `required`: Ensures the field is not empty.
- `email`: Validates an email address.
- `integer`: Validates that the input is an integer.
- `string`: Validates that the input is a string.
- `date`: Validates that the input is a date in the format `YYYY-MM-DD`.
- `pattern`: Validates the input against a regular expression.

## Examples

### Basic Usage

`````````````````javascript
import FormValidator from 'form-validation-library-yr';

const rules = {
  username: { required: true },
  email: { required: true, email: true },
};

const validator = new FormValidator(rules);

const formData = {
  username: '',
  email: 'invalid-email',
};

const errors = validator.validate(formData);
console.log(errors);
// Output:
// {
//   username: 'username is required',
//   email: 'email is not a valid email address'
// }
```

### Custom Validation

`````````````````javascript
import FormValidator from 'form-validation-library-yr';

const isPastDate = (date) => {
  const dateObj = new Date(date);
  const now = new Date();
  dateObj.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return dateObj <= now;
};

const rules = {
  birthdate: { 
    required: true, 
    date: true, 
    custom: { 
      validator: isPastDate, 
      message: 'Birthdate must be a past date'
    } 
  },
};

const validator = new FormValidator(rules);

const formData = {
  birthdate: '2050-01-01',
};

const errors = validator.validate(formData);
console.log(errors);
// Output:
// {
//   birthdate: 'Birthdate must be a past date'
// }
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Explanation:
1. **Installation**: Instructions for installing the package using npm or yarn.
2. **Usage**: Basic example of how to use the library.
3. **API**: Detailed explanation of the `FormValidator` class methods and parameters.
4. **Built-in Validators**: List of built-in validators with descriptions.
5. **Examples**: Additional examples to demonstrate basic usage and custom validation.
6. **Contributing**: Information on how to contribute to the project.
7. **License**: License information for the project.


below shows gist link for example code
https://gist.github.com/Ramosh99/abf533724978f9ed875b0beb4a08da85