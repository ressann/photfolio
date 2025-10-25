import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();
    bcrypt.genSalt(parseInt((process.env.SALT_WORK_FACTOR as string)), (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) return next(err);
            this.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword: string, callback: (err: Error | null, isMatch: boolean) => void) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return callback(err, false);
        callback(null, isMatch);
    });
};

const User = mongoose.model("User", userSchema);
export default User;