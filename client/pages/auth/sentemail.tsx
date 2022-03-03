import { useRouter } from 'next/router';
import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const SentEmail: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        パスワード再設定用メールを送信しました。メールに記載されたパスワード再設定用URLからパスワードの再設定をして下さい。
      </div>
      ;
      <Link href="/">
        <a>ホームに戻る</a>
      </Link>
    </div>
  );
};

export default SentEmail;
