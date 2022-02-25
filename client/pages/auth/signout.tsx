import { useRouter } from 'next/router';
import React, { useEffect, useContext } from 'react';
import UseRequest from '../../hooks/use-request';
import { SnackbarContext } from '../../context/snackbar-context';
import { NextPage } from 'next';

const Signout: NextPage = () => {
  const router = useRouter();
  const { toggleSnack } = useContext(SnackbarContext);
  const { doRequest } = UseRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => {
      toggleSnack(true, 'success', 'ログアウトしました!!');
      router.push('/');
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default Signout;
