import react, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ResultRequest from '../../hooks/result-request';
import Router from 'next/router';
import { GetServerSideProps } from 'next/types';
import { NextPage, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';

import { SnackbarContext } from '../../context/snackbar-context';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const TestShow: NextPage<Props> = ({ test, errorCode, currentUser }) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }

  const { toggleSnack } = useContext(SnackbarContext);
  const select1Input = react.createRef<HTMLInputElement>();
  const select2Input = react.createRef<HTMLInputElement>();
  const select3Input = react.createRef<HTMLInputElement>();
  const select4Input = react.createRef<HTMLInputElement>();
  const [answeredList, setAnsweredList] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const { doRequest, resultForm, errors } = ResultRequest({
    url: '/api/users/questions/result/',
    method: 'put',
    body: {
      testId: test.id,
      answered: Number(selectedOption),
    },
    onSuccess: (data: any) => {
      toggleSnack(data.isOpen, data.status, data.message);
      if (data.status === 'success') {
        setIsCorrect(true);
      }
    },
    currentUser,
  });

  useEffect(() => {
    disabledCheck(select1Input);
    disabledCheck(select2Input);
    disabledCheck(select3Input);
    disabledCheck(select4Input);
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    pushAnswere();
    await doRequest();
  };

  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedOption(event.target.value);
  };

  const pushAnswere = () => {
    const newAnsweredList = [...answeredList, Number(selectedOption)];
    setAnsweredList(newAnsweredList);
  };

  const disabledCheck = (ref: react.RefObject<HTMLInputElement>) => {
    if (!isCorrect) {
      if (answeredList.includes(Number(ref.current?.value))) {
        if (Number(ref.current?.value) === test.correct) {
          ref.current!.disabled = false;
        } else {
          ref.current!.disabled = true;
        }
      } else {
        ref.current!.disabled = false;
      }
    } else {
      ref.current!.disabled = true;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col flex-grow box-border">
        <div className="container shadow-md mx-auto overflow-y-auto p-4 m-2 dark:bg-gray-700">
          <header className="border-b-2">
            <h1 className="font-bold lg:text-xl dark:text-white">
              Category: {test.category}
            </h1>
          </header>
          <section className="py-6 ">
            <div>
              <h4 className="dark:text-white">【問題】</h4>
            </div>
            <div className="dark:text-white">{test.statement}</div>
            <div className="mt-6 border-4">
              <div className="m-4 dark:text-white">【選択肢】</div>
              <ul className="mx-6 my-4 border-2 ">
                <li className="border-b-2 ">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      ref={select1Input}
                      className="form-radio h-6 w-6 mt-2 ml-2"
                      name="radio"
                      value="1"
                      onChange={onValueChange}
                      checked={selectedOption === '1'}
                    />
                    <span className="ml-2 mt-1 lg:text-lg dark:text-white">
                      1. {test.selection[0]}
                    </span>
                  </label>
                </li>
                <li className="border-b-2 ">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      ref={select2Input}
                      className="form-radio h-6 w-6 mt-2 ml-2"
                      name="radio"
                      onChange={onValueChange}
                      checked={selectedOption === '2'}
                      value="2"
                    />
                    <span className="ml-2 mt-1 lg:text-lg dark:text-white">
                      2. {test.selection[1]}
                    </span>
                  </label>
                </li>
                <li className="border-b-2 ">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      ref={select3Input}
                      className="form-radio h-6 w-6 mt-2 ml-2"
                      name="radio"
                      onChange={onValueChange}
                      checked={selectedOption === '3'}
                      value="3"
                    />
                    <span className="ml-2 mt-1 lg:text-lg dark:text-white">
                      3. {test.selection[2]}
                    </span>
                  </label>
                </li>
                <li className="border-b-2 ">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      ref={select4Input}
                      className="form-radio h-6 w-6 mt-2 ml-2"
                      name="radio"
                      onChange={onValueChange}
                      checked={selectedOption === '4'}
                      value="4"
                    />
                    <span className="ml-2 mt-1 lg:text-lg dark:text-white">
                      4. {test.selection[3]}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </section>

          <div className="flex">
            {!isCorrect && (
              <button className="justify-start block px-5 py-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center   capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white">
                結果を確認
              </button>
            )}

            {resultForm}
          </div>
        </div>
      </div>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { testId } = ctx.query;
  const headers: any = ctx.req.headers;

  try {
    const { data } = await axios.get(
      `http://www.remember-cli.com/api/questions/${testId}`,
      {
        headers: headers,
      }
    );

    return {
      props: { test: data, errorCode: null },
    };
  } catch (err) {
    const errorCode = 404;
    return {
      props: { test: null, errorCode: errorCode },
    };
  }
};

export default TestShow;
