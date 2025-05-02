import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";

export async function GET(req: Request) {
    try {
        await connectDB()
        const courses = await Course.find({})
        return new Response(JSON.stringify(courses) , {status: 200})
    } catch (error) {
        console.error("Error fetching courses:", error);
        return new Response("Failed to fetch courses", { status: 500 });
    }
}