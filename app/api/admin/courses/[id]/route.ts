import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";

export async function GET(req : Request , context : { params : { id : string } }) {
    try {
        await connectDB();
        const {id} = context.params;
        const course = await Course.findById(id);

        if(!course) {
            return NextResponse.json({message : "Course not found"}, {status : 404});
        }
        return NextResponse.json(course);
    } catch (error) {
        return NextResponse.json({message : "Internal server error"}, {status : 500});
    }
}

export async function PATCH(req : Request , context : { params : { id : string } }) {
    try {
        await connectDB()
        const {id} = context.params;
        const updates = await req.json();
        const course = await Course.findByIdAndUpdate(id , updates , {new : true});
        if(!course) {
            return NextResponse.json({message : "Course not found"}, {status : 404});
        }
        return NextResponse.json({message : "Course updated"});
    } catch (error) {
        return NextResponse.json({message : "Internal server error"}, {status : 500});
    }
}