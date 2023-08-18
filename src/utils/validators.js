const Joi = require('joi')


module.exports.studentSchema = Joi.object({
    fullName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.base': `full name should be of type: 'text'`,
        'string.empty': `full name should not be empty`,
        'string.min': `full name should have at least 3 characters`,
        'String.max': `full name should contain at most 30 charcters`,
        'any.required': `full name is a required name`,
    }),
    
    studentClass: Joi.number()
    .min(1)
    .required()
    .messages({
        'number.base': `class should be of type: 'number'`,
        'any.required': `class is a required name`
    }),

    feeBalance: Joi.number()
    .min(0)
    .required()
    .messages({
        'number.base': `fee balance should be of type: 'number'`,
        'any.required': `fee balance is a required name`
    }),
})

