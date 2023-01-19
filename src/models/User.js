const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    age: {
        type: Number, required: true
    },
    direction: {
        type: String, required: true
    },
    phone: {
        type: Number, required: true
    },
},{timestamps: true});

userSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.mathPassword = function (password) {
    return bcrypt.compare (password, this.password);
}

module.exports = model ('users', userSchema);