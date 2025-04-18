import mongoose,{ Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    academicId: string;
    password: string;
} 

export const UserSchema = new Schema<IUser> ({
    name: {
        type: String,
        required: true,
    },
    academicId: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
})

export const User = mongoose.models.User || mongoose.model('User', UserSchema);