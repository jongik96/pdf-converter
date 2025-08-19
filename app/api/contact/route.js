import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください。' },
        { status: 400 }
      );
    }

    // 관리자에게 문의 메일 전송
    const { data, error } = await resend.emails.send({
      from: 'contact@pdfers.com',
      to: ['pji3503@gmail.com'], // 당신의 Gmail로 전송
      subject: `お問い合わせ: ${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>送信時間: ${new Date().toLocaleString('ja-JP')}</small></p>
      `,
      replyTo: email, // 답장 시 사용자 이메일로
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました。しばらくしてから再試行してください。' },
        { status: 500 }
      );
    }

    // 사용자에게 자동답장 전송
    await resend.emails.send({
      from: 'contact@pdfers.com',
      to: [email],
      subject: 'お問い合わせありがとうございます - 文書キング',
      html: `
        <h2>お問い合わせありがとうございます</h2>
        <p>${name}様</p>
        <p>文書キングにお問い合わせいただき、ありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました：</p>
        <div style="background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 5px;">
          <p><strong>お問い合わせ内容:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>内容を確認後、できるだけ早くご返信いたします。</p>
        <p>しばらくお待ちください。</p>
        <hr>
        <p><small>送信時間: ${new Date().toLocaleString('ja-JP')}</small></p>
        <p><small>このメールは自動送信されています。返信はできません。</small></p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'お問い合わせを正常に送信しました。確認メールをお送りします。' 
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらくしてから再試行してください。' },
      { status: 500 }
    );
  }
}
