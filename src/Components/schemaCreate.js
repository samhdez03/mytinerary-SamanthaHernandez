import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .messages({
        'string.base': 'The name must be a text',
        'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
        'any.required': 'The name field is required'
    }),
    lastName: joi.string().required().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .messages({
        'string.base': 'The last name must be a text',
        'string.pattern.base': 'The last name must contain only letters and spaces, no special characters allowed',
        'any.required': 'The last name field is required'
    }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email': 'The email must have a valid format',
        'any.required': 'The email field is required'
    }),
    password: joi.string().min(8).required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
    .messages({
        'string.base': 'The password must be a text',
        'string.min': 'The password must be at least 8 characters long',
        'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        'any.required': 'The password field is required'
    }),
    photo: joi.string().uri().required().messages({
        'string.uri': 'The photo must be a valid URL',
        'any.required': 'The photo field is required'
    }),
    country: joi.string().required().messages({
        'string.base': 'The country must be a text',
        'any.required': 'The country field is required'
    })
})

export default schema
