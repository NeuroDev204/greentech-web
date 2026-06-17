import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s/g, ""),
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <div style="background:#16a34a;border-radius:12px 12px 0 0;padding:20px 24px">
        <h2 style="color:white;margin:0;font-size:18px">📬 Yêu cầu tư vấn mới — GreenTech Solution</h2>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:24px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:130px">Họ tên</td>
              <td style="padding:8px 0;font-weight:600;color:#111827">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Email</td>
              <td style="padding:8px 0;color:#111827"><a href="mailto:${email}" style="color:#16a34a">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Số điện thoại</td>
              <td style="padding:8px 0;color:#111827">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Dịch vụ</td>
              <td style="padding:8px 0;font-weight:600;color:#16a34a">${service}</td></tr>
        </table>
        ${message ? `
        <div style="margin-top:16px;padding:14px;background:#f9fafb;border-radius:8px;border-left:3px solid #16a34a">
          <div style="font-size:12px;color:#6b7280;margin-bottom:6px">Mô tả nhu cầu:</div>
          <div style="font-size:14px;color:#374151;line-height:1.6">${message}</div>
        </div>` : ""}
        <p style="margin-top:20px;font-size:12px;color:#9ca3af;border-top:1px solid #f3f4f6;padding-top:16px">
          Gửi lúc ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })} — GreenTech Solution Website
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"GreenTech Website" <${process.env.GMAIL_USER}>`,
      to: "info@gtsol.vn",
      replyTo: email,
      subject: `[GreenTech] Yêu cầu tư vấn từ ${name} — ${service}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
