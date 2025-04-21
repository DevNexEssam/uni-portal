import mongoose,{ Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    academicId: string;
    password: string;
    role: string;
    faculty: string;
    department: string;
    academicLevel: string;
    phone : string;
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
    faculty : {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    academicLevel : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student"],
        default: "student",
    }
}, {
    timestamps: true,
    versionKey: false,
})

export const Student = mongoose.models.Student || mongoose.model('Student', UserSchema);