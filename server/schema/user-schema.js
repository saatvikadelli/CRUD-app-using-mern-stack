

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
    },
    name: String,
    username: String,
    email: String,
    Phone: String,
    gender: String,
    role: {
        type: String,
        enum : ['admin','public'],
        default: 'admin',
    }
});

// Create a function to auto-increment the userId field
userSchema.statics.getNextUserId = async function () {
    const highestUser = await this.findOne({}, { userId: 1 }).sort({ userId: -1 });
    return highestUser ? highestUser.userId + 1 : 1;
};

const userModel = mongoose.model('users', userSchema);

export default userModel;
