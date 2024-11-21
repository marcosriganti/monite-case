import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Unit from "@/lib/modals/units";

const GET = async () => {
    try {
        await connect();
        const units = await Unit.find();
        return new NextResponse(JSON.stringify(units), {status: 200});
    } catch (err) {
        console.error(err);
        return new NextResponse('Internal Server Error' + err, {status: 500});
    }
};

const POST = async (req) => {
    try {
        await connect();
        const body = await req.json();
        const unit = new Unit(body);
        await unit.save();
        return new NextResponse(JSON.stringify(unit), {status: 201});
    }
    catch (err) {
        console.error(err);
        return new NextResponse('Internal Server Error' + err, {status: 500});
    }
};
export {GET, POST};