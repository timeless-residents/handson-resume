// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // i18next-http-backend
  // 翻訳ファイルをバックエンドからロードする設定
  .use(Backend)
  // ブラウザの言語設定を検出する
  .use(LanguageDetector)
  // react-i18next の初期化
  .use(initReactI18next)
  .init({
    fallbackLng: 'ja', // デフォルト言語
    supportedLngs: ['ja', 'en', 'fr', 'ru', 'zh', 'ko'], // サポートする言語
    debug: true, // デバッグモード (開発時のみ true に推奨)
    interpolation: {
      escapeValue: false, // XSS 対策 (React ではデフォルトでエスケープされるので false でOK)
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 翻訳ファイルのパス
    },
  });

export default i18n;
