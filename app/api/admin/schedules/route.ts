import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Schedule from "../../../../models/schedule";

export async function GET(req: Request) { 

    try {
        await connectDB();
        const schedules = await Schedule.find({})
        if (!schedules) {
            return NextResponse.json({ message: "No schedules found" }, { status: 404 });
        }
        return NextResponse.json(schedules, { status: 200 });
    } catch (error) {
        console.error("Error fetching schedules:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
        
    }
}