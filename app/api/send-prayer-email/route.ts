import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ TEST ROUTE
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Email API is working",
  });
}

// ✅ SEND EMAIL
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, message, response } = body;

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required",
        },
        {
          status: 400,
        }
      );
    }

    const result = await resend.emails.send({
      from: "Global Courts of Heaven Ministry <prayers@globalcourtsofheavenministry.org>",
      to: email,
      subject: "Your Prayer Request Has Received a Response",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Global Courts of Heaven Ministry</h2>

          <p>Dear ${name || "Member"},</p>

          <p>
            Your prayer request has received a response from the ministry.
          </p>

          <hr />

          <h3>Your Prayer Request</h3>
          <p>${message || ""}</p>

          <h3>Ministry Response</h3>
          <p>${response || ""}</p>

          <hr />

          <p>
            We continue standing with you in prayer and believing God for His
            grace and intervention in your life.
          </p>

          <p>
            Blessings,<br />
            Global Courts of Heaven Ministry
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}