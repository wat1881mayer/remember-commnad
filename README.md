# Next.js-Node.js NATS-Streaming を利用したテスト学習サービス

## サービス概要

git,dokcer,kubectl の各種コマンドの理解度をテストするサービス。
<br>また自身でテストを作成し、投稿可能。
<br>NATS を利用したマイクロサービスにて構成し、Kubernetes クラスターによってデプロイ
<br>
![サムネイル](/about-this-service/free.jpeg)
<br>
http://www.remember-cli.com/

## 機能一覧

<br>

### ・テスト実施機能

### ・テスト作成機能

### ・ユーザーごとのテスト実績確認機能　

### ・認証機能

<br>

## 技術特徴

- SPA
- SSR
- マイクロサービス
- kubernetes クラスターによってデプロイ(単なる heroku でのデプロイではなく、デプロイそのものにも工夫あり)
- Typescript を使用

## 使用技術

### バックエンド

- Node.js
- Typescript

### フロントエンド

- Next.js
- React.js
- Typescript
- TailwindCSS
- materialUI

### DB

- mongoDB

### インフラストラクチャー

- Ingress-Nginx
- Docker
- Kubernetes

### deploy

- Digital Ocean

### テストツール

- Jest

### CI/CD

- Github Actions

### その他ツール

- skaffold(google)
- SENDGRID

## アーキテクチャ構成

![アーキテクチャ](/about-this-service/About-Portfolio-010-Architecture.drawio.svg)

## E-R 図等各種資料

github の当レポジトリの/about-this-service 配下に E-R 図など開発資料を格納。(ファイル名:About-Portfolio.xml) <br>
[diagrams.net](https://www.diagrams.net)にて展開可能です。

<br>

# 注意点

当プロジェクトの構成ファイル(skaffold.yaml 等)のファイルのいくつかは当レポジトリ所有者の docker アカウント
を記載しております。またトークンや環境変数のいくつかを設定する必要があるので、git clone によってすぐに
動作確認することは出来ません。
