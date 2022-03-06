import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const SentEmail: NextPage = () => {
  return (
    <section className="mx-6 my-6 px-4 py-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
          パスワード再設定用URL通知メールを送信しました
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300">
          2時間以内にパスワード再設定用通知メールに記載されたURLにアクセスし、パスワード再設定をするようお願いいたします。
        </p>

        <Link href="/">
          <a
            className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            href="#"
          >
            ホームに戻る
          </a>
        </Link>
      </div>
    </section>
  );
};

export default SentEmail;
