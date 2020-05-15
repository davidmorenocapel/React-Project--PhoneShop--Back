const mongoose = require('mongoose');

const userShcema = new mongoose.Schema({
  
    id: Number,
    name: String,
    direction: String,
    img: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'seller']
    },
    tokens: [String],
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.tokens;
            delete ret.password;
            return ret;
        }
    },
});

const UserModel = mongoose.model('User', suerSchema);
module.exports = UserModel;