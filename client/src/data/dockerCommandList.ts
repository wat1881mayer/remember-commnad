import CommandAttrs from '../interface/commandAttrs';

export const dockerCommandList: CommandAttrs[] = [
  {
    command: 'build',
    description: '指定したDockerfileをビルドし、イメージを作成する',
    example: 'docker build -t myimage .',
    options: [
      {
        optionName: '-t',
        optionDescription: '作成したイメージに名前とタグをつける',
      },
    ],
  },
  {
    command: 'rmi',
    description: '指定した名前、IDのイメージを削除する',
    example: 'docker rmi myimage',
    options: [
      {
        optionName: '-f',
        optionDescription: 'イメージの強制削除',
      },
    ],
  },
  {
    command: 'create',
    description: '新しいコンテナの作成',
    example: 'docker build -it fedara bash',
    options: [
      {
        optionName: '-i',
        optionDescription: 'アタッチしなくてSTDINを開き続ける',
      },
      {
        optionName: '-t',
        optionDescription: '擬似ターミナルを割り当てる',
      },
      {
        optionName: '-e',
        optionDescription: '環境変数を設定する',
      },
    ],
  },
  {
    command: 'exec',
    description: '起動中のコンテナ内でコマンドを実行する',
    example: 'docker exec -it ubuntu_bash bash',
    options: [
      {
        optionName: '-d',
        optionDescription: 'デタッチモードで起動',
      },
      {
        optionName: '-i',
        optionDescription: 'アタッチしていなくても STDIN をオープンにし続ける',
      },
      {
        optionName: '-t',
        optionDescription: '擬似ターミナルを割り当てる',
      },
    ],
  },
  {
    command: 'run',
    description: 'コンテナをイメージから作成し、指定したコマンドを実行する',
    example: 'docker run -p 127.0.0.1:80:8080 ubuntu bash',
    options: [
      {
        optionName: '--name',
        optionDescription: '作成したコンテナに名前をつける',
      },
      {
        optionName: '-p',
        optionDescription: 'ホスト側とポートフォーワードする。',
      },
      {
        optionName: '-d',
        optionDescription: 'コンテナをバックグラウンドで起動する。',
      },
      {
        optionName: '-i',
        optionDescription: 'コンテナのSTDINにアタッチする',
      },
      {
        optionName: '--rm',
        optionDescription: 'コンテナ終了時、自動的にコンテナを削除',
      },
    ],
  },
  {
    command: 'stop',
    description: '指定したコンテナを停止する',
    example: 'docker stop mydockercontainer',
    options: [
      {
        optionName: '-t',
        optionDescription: 'kill で停止するまでに待機する秒数',
      },
    ],
  },
];
