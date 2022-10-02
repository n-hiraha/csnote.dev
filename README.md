## csnote

アウトプット用の技術ブログ

## DEMO

[csnote.dev](https://csnote.dev)

## Features

### フロントエンド

書き慣れている Next.js/Typescript を採用。
レンダリングは SSR を使用。

### バックエンド

現状なし。Go で何か機能を作っても良いと考え中。

### インフラ

インフラは使い慣れている GCP を採用。Cloud Run のコンテナ上で動かしている。コスト的にも Good。 GCP ロギングが見やすくバグ対応しやすい点が個人的にお気に入り。

また、Github にデプロイすると自動ビルドを行い、Cloud Run へ自動デプロイするように設定した。

- Cloud Run
- Cloud CDN
- ロードバランサ
- Cloud Build

## Requirement

- Docker 20.10.10
- npm 8.14

## Usage

### 起動方法 ① Docker コンテナ

以下コマンドを実行。

```bash
docker compose up
```

### 起動方法 ② ローカルで通常軌道

以下スクリプトを実行。

```bash
start.sh
```

## Author

- 作成者:平原尚樹
- 所属:var
- E-mail:genenao21@gmail.com
