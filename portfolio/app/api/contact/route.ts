import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || "b2a135b8-910c-4596-9992-ee8206f85efc";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        name,
        email,
        message,
        subject: `New Portfolio Contact Message from ${name}`,
      }),
    });

    const result = await response.json();
    console.log("Web3Forms API Response:", result);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      result,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Error sending contact email:", errMessage);
    return NextResponse.json(
      { success: true, message: "Message received.", note: errMessage },
      { status: 200 }
    );
  }
}
