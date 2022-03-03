import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router';
import { useContext } from 'react';
import useRequest from '../../../hooks/use-request';
import { SnackbarContext } from '../../../context/snackbar-context';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Error from 'next/error';
import { domain } from '../../../src/config/keys';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const PasswordReset: NextPage<Props> = ({ token, valid, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }

  if (!valid) {
    return <Error statusCode={404} />;
  }

  const { toggleSnack } = useContext(SnackbarContext);
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const { doRequest, errors } = useRequest({
    url: `/api/users/reset/${token}`,
    method: 'post',
    body: {
      password,
    },
    onSuccess: () => {
      toggleSnack(true, 'success', 'パスワードを再設定しました!!');
      Router.push('/');
    },
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      await doRequest();
    } else {
      toggleSnack(true, 'error', 'パスワードが確認用のものと一致しません。');
    }
  };

  return (
    <form
      className="container mx-auto overflow-hidden  max-w-5xl p-4 m-1  bg-white rounded-md shadow-md dark:bg-gray-800"
      onSubmit={onSubmit}
    >
      <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        パスワード再設定画面
      </h1>
      <div className="text-gray-700 dark:text-white">
        <label>パスワード</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="text-gray-700 dark:text-white">
        <label>パスワード再確認</label>
        <input
          value={passwordConfirm}
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      {errors}
      <div className="flex justify-end mt-6">
        <button className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          パスワード再設定
        </button>
      </div>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const resetpassword = ctx.query!.resetpassword;
  const headers: any = ctx.req.headers;

  try {
    const { data } = await axios.get(
      `${domain.kubernetes}/api/users/reset/${resetpassword}`,
      {
        headers: headers,
      }
    );
    console.log(data);
    return {
      props: { token: resetpassword, valid: data.valid, errorCode: null },
    };
  } catch (err) {
    const errorCode = 404;
    return {
      props: { token: resetpassword, valid: null, errorCode: errorCode },
    };
  }
};

export default PasswordReset;
