import useRequest from '../hooks/use-request';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { SnackbarContext } from '../context/snackbar-context';
import { BooleanDispatch } from '../src/type/dispatch';

type AppProps = {
  setter: BooleanDispatch;
};

const Modal: React.FC<AppProps> = ({ setter }) => {
  const current_path = useRouter();
  const { toggleSnack } = useContext(SnackbarContext);
  const { doRequest, errors } = useRequest({
    url: `/api/questions/${current_path.query.questionId}`,
    method: 'delete',
    body: {},
    onSuccess: () => {
      toggleSnack(true, 'success', 'テストを削除しました。');
      Router.push('/');
    },
  });

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setter(false);
    await doRequest();
  };

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-red-400">注意</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setter(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                テストを削除しますが、本当に宜しいでしょうか？
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setter(false)}
              >
                キャンセル
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => onClick(e)}
              >
                削除
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
