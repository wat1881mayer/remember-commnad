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

export const kubectlCommandList: commandAttrs[] = [
  {
    command: 'apply',
    description: '指定したファイルからクラスター内にリソースを作成、更新する',
    example: 'kubectl apply -f manifest.yaml ',
    options: [
      {
        optionName: '-f',
        optionDescription: 'マニフェストファイルを指定する際に必要',
      },
      {
        optionName: '-r',
        optionDescription:
          '指定したファイルまたは、フォルダの下位階層も読み込み対象とする',
      },
    ],
  },
  {
    command: 'get',
    description: '指定したタイプの稼働中のサービスやポッドの一覧を表示する',
    example: 'kubectl get pods',
    options: [
      {
        optionName: '--all-namespaces',
        optionDescription: '全ての名前空間を対象とする',
      },
      {
        optionName: '--selector',
        optionDescription:
          '名前を含む場合や、逆に含まないものを指定することができる',
      },
      {
        optionName: '--sort-by',
        optionDescription: '指定した条件でソートする',
      },
    ],
  },
  {
    command: 'scale',
    description: 'レプリカ数を変更する',
    example: 'kubectl scale --replicas=3 rs/foo',
    options: [
      {
        optionName: '--replicas',
        optionDescription: '増減するレプリカ数を指定する',
      },
    ],
  },
  {
    command: 'delete',
    description: 'podやservice等、指定したタイプのものを削除する',
    example: 'kubectl delete pod,service baz foo',
    options: [
      {
        optionName: '-f',
        optionDescription: '指定したファイルに記載されたpodやserviceを削除する',
      },
      {
        optionName: '-k',
        optionDescription:
          '指定したディレクトリにあるマニフェストファイルによって起動されたpodやserviceを削除する',
      },
    ],
  },
];
