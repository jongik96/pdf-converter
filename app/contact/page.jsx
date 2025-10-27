export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <p className="mb-8 text-gray-700">
        PDFerのサービスに関するご質問、ご要望、不具合のご報告など、
        どのようなお問い合わせも大歓迎です。<br />
        下記のボタンからご連絡いただければ、迅速にご回答いたします。
      </p>
      
      {/* 이메일 문의 안내 */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 mb-8 border-2 border-green-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">📧 メールでお問い合わせ</h2>
          <p className="text-gray-700 mb-6">
            以下のボタンをクリックすると、お使いのメールクライアントが起動します。<br />
            お気軽にお問い合わせください。
          </p>
          <a 
            href="mailto:pji3503@gmail.com?subject=PDFerお問い合わせ&body=お名前：%0D%0A%0D%0Aメールアドレス：%0D%0A%0D%0Aお問い合わせ内容：%0D%0A"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ✉️ お問い合わせメールを送る
          </a>
        </div>
      </div>

      {/* 문의 안내 */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">✉️</span>
            メールに含めていただきたい内容
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>お名前</li>
            <li>ご返信用メールアドレス</li>
            <li>お問い合わせ内容（できるだけ詳しく）</li>
            <li>不具合の場合：エラーメッセージ、発生状況など</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            お問い合わせ後の流れ
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-green-700 ml-4">
            <li>メールを送信していただきます</li>
            <li>内容を確認のうえ、24～48時間以内にご返信いたします</li>
            <li>必要に応じて追加のご質問をさせていただく場合があります</li>
          </ol>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            よくあるお問い合わせ
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li>• ファイル変換が失敗する場合 → ファイル形式とサイズをご確認ください</li>
            <li>• 対応していないファイル形式 → 対応予定の形式をお問い合わせください</li>
            <li>• 新機能のご要望 → どんな機能でもお気軽にご提案ください</li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        お問い合わせいただいた内容は、サービス改善のために活用させていただきます。
      </p>
    </div>
  );
}