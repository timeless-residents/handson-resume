import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Google Tag Manager
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MHHVNK3Z');
    `;
    document.head.appendChild(script);
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
      <div className="mb-8 flex flex-col items-center">
        <img 
          src="/assets/profile_1.jpeg" 
          alt="Takuya Sato" 
          className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold">Takuya Sato</h1>
        <p className="text-gray-600 text-xl">
          AI Powered Innovation Senior Specialist Lead
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">自己紹介</h2>
          <p>
            デジタルトランスフォーメーション、AI、先端技術における20年以上の経験を持つ革新的で成果重視のチーフエンジニア。急速に変化する産業において、クライアントの持続可能な成長と競争力のあるソリューションを実現するための最先端技術の活用に注力している。生成AIアドバイザリーコンサルタントとして、変革的なイノベーションと高インパクトなソリューション提供を目指している。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">専門スキル</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">プログラミング言語</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Go</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">フロントエンド</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Next.js</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">バックエンド</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">FastAPI</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">データベース</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">Redis</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">DevOpsとツール</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">Git</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">VS Code</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">Postman</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">注力領域</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm">音声認識・合成</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">AI/LLMシステム実装</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">マイクロサービス設計</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">職歴</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">デロイトトーマツコンサルティング</h3>
              <div className="mb-4">
                <p className="font-semibold">Senior Specialist Lead (2024年8月 - 現在)</p>
                <p>急速に変化する産業において、クライアントの持続可能な成長とイノベーティブな変革を支援。戦略的アプローチと最先端技術を活用し、ビジネス変革を推進。</p>
              </div>
              <div>
                <p className="font-semibold">Studio Senior Manager (2020年3月 - 2024年8月)</p>
                <p>ビジネスインキュベーション、新製品開発、エンジニアリング文化の醸成、プロトタイピング、ワークショップ企画、グローバル企業間コラボレーション。</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Deloitte Digital</h3>
              <p className="font-semibold">Chief Engineer (2020年3月 - 2024年8月)</p>
              <p>デジタルアセット コア インキュベーター / dX Garage チーフエンジニア / DevOpsSec テクノロジー オペレーションモデル チャンピオン / 商用製品ビルドプロジェクトマネージャー / AI、IoT、ブロックチェーン、XRなどの先端技術インストラクター。</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">SPOT CTO / Parallels CTO</h3>
              <p className="font-semibold">スタートアップベンチャー向け CTO (2016年4月 - 2020年3月)</p>
              <p>財務計画、ビジネス開発、アカウント開発、MVPプロトタイピング、概念実証（PoC）、価格設定、商業化、マーケティングコンサルティング。</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Fujitsu</h3>
              <p className="font-semibold">エンジニア (2003年4月 - 2007年3月)</p>
              <ul className="list-disc list-inside text-sm">
                <li>新卒研修プロジェクトリーダー</li>
                <li>アドレス管理システムの企画、設計、開発</li>
                <li>グローバル物流システムの管理と運用</li>
                <li>法務省向け電子申請システムの開発</li>
                <li>ソフトウェア開発の標準化と開発支援ツールの設計・開発</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">その他の経歴</h3>
              <div className="mb-4">
                <p className="font-semibold">Willgate Vietnam, Inc. - CEO (2013年4月 - 2015年3月)</p>
                <p>オフショアリング、プロジェクト管理</p>
              </div>
              <div>
                <p className="font-semibold">Micrologic - テクニカルインターン (1998年10月 - 2003年3月)</p>
                <p>自動温度制御システムの構築と検証テスト、半導体製造装置の開発と提供（リアルタイムガス流れ可視化機能開発、ネットワーク制御機能開発）、産学連携支援</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">オープンソース・個人開発</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold">音声認識技術</h4>
                <p className="text-sm text-gray-600">Azure Speech, Picovoice, ElevenLabs等を活用した音声認識・合成システム開発</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold">Webアプリケーション</h4>
                <p className="text-sm text-gray-600">Vite, Svelte, Next.js等を用いたモダンなUI/UX開発</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold">AI/ML実装</h4>
                <p className="text-sm text-gray-600">Google Gemini活用、KPI分析、自然言語処理の実践</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold">インフラ構築</h4>
                <p className="text-sm text-gray-600">AWS ETL, CI/CD自動化, マイクロサービス実装</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">教育・資格</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">学歴</h3>
            <p>東京高専 (1999年 - 2003年)</p>
            <p className="text-gray-600">IoT / AI / コンピュータサイエンス / プログラミング / ロボティクス</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">言語能力</h3>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold">英語</span>
                <div className="text-right">
                  <p>CEFR C1 (ELSA, Corp)</p>
                  <p>TOEIC 715点</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">受賞歴 & 出版物</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">受賞</h3>
            <p className="mb-4">World Blockchain Summit トップ10プロジェクトリーダー (WBF)</p>

            <h3 className="text-xl font-bold mb-3">出版物</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">「インダストリーセールス戦略」(Cybertail出版, 2024年12月)</p>
                <p className="text-gray-600">業界知識と顧客ニーズを深く理解し、長期的な関係を築くための営業戦略を詳説。</p>
              </li>
              <li>
                <p className="font-semibold">Forbes JAPAN 「Future of Cities 新スマートシティ宣言」(2022年8月)</p>
                <p className="text-gray-600">技術と人間中心のアプローチによる、住民参加型のスマートシティ構想を執筆。</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="text-center py-4 mt-8 border-t border-gray-300">
        <p className="text-gray-500">© 2025 Takuya Sato - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;