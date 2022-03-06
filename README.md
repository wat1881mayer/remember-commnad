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

- Digital Ocean
- Ingress-Nginx
- Docker
- Kubernetes

### テストツール

- Jest

### CI/CD

- Github Actions

### その他ツール

- skaffold(google)

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
