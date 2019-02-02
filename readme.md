#このプログラムについて

Dockerの学習用として作成したサンプルプログラムです

#プロジェクト構成
  プロジェクトmetaweb-hello は次のモジュールで構成されています。
  - **UI (./api フォルダ)** Webフロントエンド部分を表現する。webpack,react,nginxで動作させる。

  - **API (./ui フォルダ)** Web API、ビジネスロジック部分を表現する。Python(3.6.7)で動作させる。

metaweb-helloは3個のDockerコンテナで動作します。上記のモジュールをそれぞれ動作させるためのUI,APIコンテナに加えて、
データベース(MySql)を構築するための**DB**コンテナ(Dockerイメージは mysql:latest)を動作させます。

UIとAPIにはそれぞれのトップフォルダ内 **"./api"**, **"./ui"** の直下にDockerfileが用意されています。
トップフォルダにはそれらをまとめる**UI, API, DB**を動作させるための**docker-compose.yml**ファイルが用意されています。
#コンテナ実行/テスト方法
- 全コンテナの実行方法
  - トップフォルダで **"cd ui"** を実行の後 **"npm run docker-compose"** を実行してください。
(webpack.config.js にて docker-compose up --buildの実行するよう記されています。
- UI単独の実行方法
  - **"cd ui"**を実行して、**"npx webpack-dev-server"** を実行の後、webブラウザで **localhost:8080**を開いてください。
  webpack-dev-serverは変更を自動的に検出して再表示します。
- api単独の実行方法
  - （スタブ）