import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/modals/products";

const GET = async () => {
    try {
        await connect();
        const products = await Product.find().populate('unit'); // gets the unit data from the Unit model
        return new NextResponse(JSON.stringify(products), {status: 200});
    } catch (err) {
        console.error(err);
        return new NextResponse('Internal Server Error' + err, {status: 500});
    }
};

const POST = async (req) => {
    try {
        await connect();
        // Receives the FormData created in the client side
        const formData = await req.formData();
        // Parse to be used in the schema
        const data = Object.fromEntries(formData);
        const product = new Product(data);
        await product.save();
        await product.populate('unit');
        return new NextResponse(JSON.stringify(product), {status: 201});
    }
    catch (err) {
        console.error(err);
        return new NextResponse('Internal Server Error' + err, {status: 500});
    }
};
export {GET, POST};