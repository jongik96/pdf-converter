import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 관리자에게 문의 메일 전송
    const { data, error } = await resend.emails.send({
      from: 'contact@pdfers.com',
      to: ['pji3503@gmail.com'], // 당신의 Gmail로 전송
      subject: `문의하기: ${name}님으로부터`,
      html: `
        <h2>새로운 문의가 도착했습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>문의내용:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>전송시간: ${new Date().toLocaleString('ko-KR')}</small></p>
      `,
      replyTo: email, // 답장 시 사용자 이메일로
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' },
        { status: 500 }
      );
    }

    // 사용자에게 자동답장 전송
    await resend.emails.send({
      from: 'contact@pdfers.com',
      to: [email],
      subject: '문의하기 감사합니다 - 문서킹',
      html: `
        <h2>문의하기 감사합니다</h2>
        <p>${name}님</p>
        <p>문서킹에 문의해주셔서 감사합니다.</p>
        <p>다음과 같은 내용으로 문의를 접수했습니다:</p>
        <div style="background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 5px;">
          <p><strong>문의내용:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>내용을 확인한 후, 가능한 한 빨리 답변드리겠습니다.</p>
        <p>잠시만 기다려주세요.</p>
        <hr>
        <p><small>전송시간: ${new Date().toLocaleString('ko-KR')}</small></p>
        <p><small>이 메일은 자동으로 전송되었습니다. 답장은 불가능합니다.</small></p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: '문의를 성공적으로 전송했습니다. 확인 메일을 보내드립니다.' 
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
