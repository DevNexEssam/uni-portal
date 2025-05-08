import mongoose, { Schema } from "mongoose";

export interface IFile extends Document {
    fileCode : string,
    courseCode : string,
    fileName : string,
    fileDescreption : string,
    department: string,
    faculty :  string,
}

export const filesSchema = new Schema<IFile>({
    fileCode: {
        type: String,
        required: true,
        unique: true,
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
    fileName : {
        type: String,
        required: true,
    } ,
    fileDescreption : {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    faculty : {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    versionKey: false,
})

export const File = mongoose.models.File || mongoose.model("File" , filesSchema )

export default File;