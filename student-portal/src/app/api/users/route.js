import { User, } from "@/app/lib/model/connect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data=[];
    let success=true;
    try {
        await mongoose.connect("mongodb://localhost:27017");
        data=await User.find();
        console.log(data);
    } catch (error) {
        data={result:"error"}
        success=false
    }

    return NextResponse.json({result:data ,success})
}

export async function POST(request){
    const payload= await request.json();
    await mongoose.connect("mongodb://localhost:27017");
    let users=new User(payload);
    // if (password !== confirmPassword) {
    //     ("your password and confirmpassword is not matching ");
    //     success=false
    //   }
    let result= await users.save();
   
    return NextResponse.json({result,success:true})
}

