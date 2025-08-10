# 不動産物件管理システム

Next.js 15 + TypeScript + Tailwind CSS で構築された不動産物件管理システムです。

## 🚀 機能

- 物件の登録・編集・削除
- 画像管理（Cloudinary連携）
- 認証システム（NextAuth.js）
- レート制限機能
- バックアップ機能

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **認証**: NextAuth.js
- **画像管理**: Cloudinary
- **データベース**: PostgreSQL (Prisma)

## 📋 ローカル開発手順

### 1. 環境構築

```bash
# リポジトリをクローン
git clone <repository-url>
cd hp

# 依存関係をインストール
npm install

# 環境変数を設定
cp env.example .env
# .envファイルを編集して必要な値を設定
```

### 2. データベース設定

```bash
# PostgreSQLを起動
# データベースを作成
createdb properties_db

# 環境変数でDB接続情報を設定
```

### 3. 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### 4. シードデータ投入

```bash
npm run seed
```

## 🚀 Vercel デプロイ手順

### 1. Vercel CLI インストール

```bash
npm i -g vercel
```

### 2. プロジェクト設定

```bash
# Vercelにログイン
vercel login

# プロジェクトを設定
vercel
```

### 3. 環境変数設定

Vercelダッシュボードで以下の環境変数を設定：

- `NEXTAUTH_SECRET`: セキュアなシークレットキー
- `NEXTAUTH_URL`: 本番URL
- `ADMIN_USERNAME`: 管理者ユーザー名
- `ADMIN_PASSWORD`: 管理者パスワード
- `CLOUDINARY_CLOUD_NAME`: Cloudinary設定
- `CLOUDINARY_API_KEY`: Cloudinary設定
- `CLOUDINARY_API_SECRET`: Cloudinary設定

### 4. デプロイ実行

```bash
vercel --prod
```

## ✅ デプロイ後動作確認チェックリスト

### 基本動作確認
- [ ] トップページが正常に表示される
- [ ] 物件一覧が表示される
- [ ] 画像が正常に表示される

### 認証機能確認
- [ ] 管理者ログインが正常に動作する
- [ ] 未認証ユーザーが保護されたAPIにアクセスできない
- [ ] セッション管理が正常に動作する

### API動作確認
- [ ] GET /api/properties が正常に動作する
- [ ] POST /api/properties が認証後に正常に動作する
- [ ] PATCH /api/properties/[id] が認証後に正常に動作する
- [ ] DELETE /api/properties/[id] が認証後に正常に動作する
- [ ] レート制限が正常に動作する（1分あたり5回）

### セキュリティ確認
- [ ] CSRF対策が正常に動作する
- [ ] セキュリティヘッダーが設定されている
- [ ] 環境変数が適切に設定されている

### パフォーマンス確認
- [ ] ページ読み込み速度が適切
- [ ] 画像最適化が正常に動作する
- [ ] ビルドが正常に完了する

## 📚 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
