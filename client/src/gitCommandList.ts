interface commandAttrs {
  command: string;
  description: string;
  example: string;
  options: optionAttrs[];
}

interface optionAttrs {
  optionName: string;
  optionDescription: string;
}

export const gitCommandList: commandAttrs[] = [
  {
    command: 'add',
    description: '引数に指定したファイルの変更をステージングする',
    example: 'git add index.js',
    options: [
      {
        optionName: '.',
        optionDescription: '変更された全てのファイルを指定する。',
      },
    ],
  },
  {
    command: 'commit',
    description: 'ステージングされたファイル、フォルダの変更を記録する。',
    example: 'git commit ',
    options: [
      {
        optionName: '-m',
        optionDescription: 'git commitにコメントを1行で付与できる',
      },
    ],
  },
  {
    command: 'pull',
    description:
      'リモートリポジトリから最新のソースコードを取得し、ローカルリポジトリに変更をマージする',
    example: 'git pull origin main',
    options: [],
  },
  {
    command: 'push',
    description:
      'ローカルブランチの全てのコミットをリモートリポジトリにプッシュする',
    example: 'git push origin main',
    options: [
      {
        optionName: '-u',
        optionDescription: '指定したブランチを上流ブランチとして設定する',
      },
      {
        optionName: '-d',
        optionDescription: '指定したブランチをリモートリポジトリから削除する。',
      },
    ],
  },
  {
    command: 'checkout',
    description: '指定したブランチにカレントブランチを切り替える',
    example: 'git checkout main',
    options: [
      {
        optionName: '-b',
        optionDescription:
          '新規ブランチを作成し、そのブランチにカレントブランチを切り替える',
      },
    ],
  },
  {
    command: 'branch',
    description: 'オプションなしの場合は、ブランチ一覧を表示する',
    example: 'git branch -r',
    options: [
      {
        optionName: '-r',
        optionDescription: 'リモートリポジトリのブランチを表示する',
      },
      {
        optionName: '-a',
        optionDescription:
          'ローカル・リモートリポジトリの全てのブランチを表示する。',
      },
      {
        optionName: '-d',
        optionDescription: '指定したブランチを削除する',
      },
    ],
  },
  {
    command: 'status',
    description:
      'コミット可能な全てのファイルの変更、ステージング状況を表示する',
    example: 'git status',
    options: [],
  },
  {
    command: 'reset',
    description:
      '指定したコミット番号以降のコミットを全て取り消す。（ローカルでは変更内容自体は保持される)',
    example: 'git reset 5t54fdfdfdfdfe',
    options: [
      {
        optionName: '--hard',
        optionDescription:
          'ローカルの変更内容も含め、指定したコミット以降の変更を破棄する',
      },
    ],
  },
];
