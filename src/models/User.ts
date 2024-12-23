import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'The userName is required'],
        trim: true, 
        minlength: [3, 'The userName must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        minlength: [6, 'The password must be at least 6 characters long'],
    },
}, {
    timestamps: true, 
});

const User = mongoose.model('User', userSchema);

export default User;
