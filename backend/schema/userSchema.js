import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    accessToken :{
        type: String,
        require : true
    }
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password);
        return next();
    }

    next();
});

const user = mongoose.model('user', userSchema);

// module.exports = user;
export default user;