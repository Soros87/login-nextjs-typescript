import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { hashString } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, password } = await req.body();

  //Validate fields
  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();

    //Check if the user already exist
    const userExist = await User.findOne({ email });
    if (userExist)
      return NextResponse.json(
        { message: "Email address already exists" },
        { status: 400 }
      );

    //hashPassword uses a salt (random data input) to hash the password - see utils
    const hashedPassword = await hashString(password);
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User successfully registered." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
