import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { hashString } from "@/lib/utils";

interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function POST(req: { json: () => Promise<RequestBody> }) {
  const { firstName, lastName, email, password } = await req.json();

  //Validate fields
  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }

  //Check if the user already exist
  const userExist = await User.findOne({ email });
  if (userExist)
    return NextResponse.json(
      { message: "Email address already exists" },
      { status: 400 }
    );

  //hashPassword uses a salt (random data input) to hash the password - see utils
  const hashedPassword = await hashString(password);

  try {
    await connectMongoDB();
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
