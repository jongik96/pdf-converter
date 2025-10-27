import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Users } from "lucide-react"



export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "超高速変換",
      description: "最適化された変換エンジンでファイルを数秒で高速処理します。",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "完璧なセキュリティ",
      description: "すべてのファイルは安全に処理され、変換完了後すぐに自動削除されます。",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "最高品質",
      description: "文書の元の品質とレイアウトをそのまま維持します。",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "誰でも簡単に",
      description: "特別な技術知識がなくても誰でも簡単に使用できる直感的なインターフェースを提供します。",
    },
  ]

  const stats = [
    { number: "1,000万+", label: "累計変換ファイル" },
    { number: "50万+", label: "満足した利用者" },
    { number: "25+", label: "対応ファイル形式" },
    { number: "99.9%", label: "サービス稼働率" },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">PDFer紹介</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                インストールも、会員登録も不要です。クリック数回で完了。<br />
                国内代表無料文書変換サイトPDFer。<br /><br />

                <strong>すべての機能100%無料。</strong><br />
                使ってみるとなぜ皆が絶賛するかすぐに分かります。<br />
                今すぐ利用してみてください。
              </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">PDFer！選ぶべき理由</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PDFerは安定性、使用利便性、セキュリティ、品質すべての面で最高のWebベースファイル変換プラットフォームを追求します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PDFer物語</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  PDFerは単純な文書変換サイトではありません。<br />
                  <strong>'なぜこんなに複雑でなければならないのか？'</strong><br />
                  私たちは既存の遅く、複雑で、信頼できなかった変換サービスに不満を持って始めました。
                </p>
                <p>
                  開発者とデザイナー、実際のユーザーが一緒に悩みました。<br />
                  <strong>本当に必要なものは何だろう？</strong><br />
                  どうすれば誰でも速く簡単に使えるだろうか？
                </p>
                <p>
                  だから決心しました。<br />
                  不要な機能はすべて捨てよう。<br />
                  本当に重要なものだけを残そう。<br />
                  その結果、誰でも直感的に使用できる簡潔なインターフェースが誕生しました。<br />
                  <strong>100%日本語案内、モバイル環境まで完璧に最適化。</strong><br />
                  どのようなデバイスでも、どのような年齢層でも、誰でも数秒で変換できます。
                </p>
                <p>
                  そしてPDFerは海外サービスとは違います。<br />
                  国内ユーザーのみのための、国内専用文書変換サービスです。<br />
                  海外にサーバーがあるサービスと比較してはいけません。<br />
                  <strong>PDFerは国内に位置するサーバーを使用するため、どのサイトよりも高速な速度を誇ります。</strong>
                </p>
                <p>
                  複雑な世界で、シンプルさは競争力です。<br />
                  文書変換？今はPDFer一つで十分です。
                </p>
              </div>
            </div>
              <div
                className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PDFer対応拡張子</h3>
                <p className="text-gray-700 mb-3">
                  誰でも、どのような環境でも簡単にファイル変換ができるように。<br />
                  専門知識がなくても、デバイス性能と関係なく最高品質を提供します。
                </p>
                <div className="text-base font-medium text-gray-900 mt-4">
                  <strong>対応ファイル:</strong><br />
                  PDF, DOCX, XLSX, CSV, PPTX, JPG, JPEG, PNG, WEBP, HEIC
                </div>
              </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PDFerの約束</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">個人情報/セキュリティ最優先</h3>
                <p className="text-gray-600">
                  皆様のファイルは皆様の大切な資産です。<br />
                  すべてのファイルは安全に処理され、変換が終わるとすぐにサーバーから完全に削除されます。<br />
                  サーバー保存・追跡・分析一切ありません。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">完全無料、誰でも利用</h3>
                <p className="text-gray-600">
                  PDFerの核心サービスは今後も無料で提供されます。<br />
                  誰でも負担なく利用してみることをお勧めします。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">持続的改善と革新</h3>
                <p className="text-gray-600">
                  より多くの形式対応、より高速な速度、より便利な機能のために着実に発展します。<br />
                  利用者意見もいつでも歓迎します！
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}