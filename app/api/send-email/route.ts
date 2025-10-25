import Welcome from "@/components/contact/Welcome";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { username, email, message, subject } = await req.json();

    console.log("Received data:", { username, email, message, subject });

    if (!username || !email || !message || !subject)
      return NextResponse.json(
        { message: "username, email, message, and subject are required." },
        { status: 400 }
      );
    const resend = new Resend(process.env.RESEND_API_KEY!);

    resend.domains.verify(process.env.RESEND_DOMAIN!);

    const { error } = await resend.emails.send({
      from: email,
      to: [process.env.EMAIL!],
      subject,
      react: Welcome(),
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
