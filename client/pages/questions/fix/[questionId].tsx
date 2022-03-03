import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NextPage, InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next/types';
import useRequest from '../../../hooks/use-request';

import Router from 'next/router';
import TestSection from '../../../components/testSection';
import Modal from '../../../components/modal';
import { SnackbarContext } from '../../../context/snackbar-context';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { domain } from '../../../src/config/keys';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const QuestionShow: NextPage<Props> = ({ question, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }

  const { toggleSnack } = useContext(SnackbarContext);
  const current_path = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteErrors, setDeleteErrors] = useState<any>(null);
  const [category, setCategory] = useState<string>(question.category);
  const [statement, setStatement] = useState<string>(question.statement);
  const [select1, setSelect1] = useState<string>(question.selection[0]);
  const [select2, setSelect2] = useState<string>(question.selection[1]);
  const [select3, setSelect3] = useState<string>(question.selection[2]);
  const [select4, setSelect4] = useState<string>(question.selection[3]);
  const [correct, setCorrect] = useState<number>(question.correct);

  console.log(deleteErrors);

  const handleonChangeEventofStatement = (value: string) => setStatement(value);
  const handleonChangeEventofSelect1 = (value: string) => setSelect1(value);
  const handleonChangeEventofSelect2 = (value: string) => setSelect2(value);
  const handleonChangeEventofSelect3 = (value: string) => setSelect3(value);
  const handleonChangeEventofSelect4 = (value: string) => setSelect4(value);
  const handleonChangeEventofCorrect = (value: number) => setCorrect(value);

  const { doRequest, errors } = useRequest({
    url: `/api/questions/${current_path.query.questionId}`,
    method: 'put',
    body: {
      category,
      statement,
      select1,
      select2,
      select3,
      select4,
      correct,
    },
    onSuccess: () => {
      toggleSnack(true, 'success', 'テスト修正完了しました。');
      Router.push('/');
    },
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await doRequest();
  };

  const test = {
    statement: statement,
    select1: select1,
    select2: select2,
    select3: select3,
    select4: select4,
    correct: correct,
    handleonChangeEventofStatement: handleonChangeEventofStatement,
    handleonChangeEventofSelect1: handleonChangeEventofSelect1,
    handleonChangeEventofSelect2: handleonChangeEventofSelect2,
    handleonChangeEventofSelect3: handleonChangeEventofSelect3,
    handleonChangeEventofSelect4: handleonChangeEventofSelect4,
    handleonChangeEventofCorrect: handleonChangeEventofCorrect,
  };

  return (
    <div>
      <form className="w-full max-w-7xl dark:bg-gray-700" onSubmit={onSubmit}>
        <div className="flex flex-wrap mx-4 mb-20 mt-8">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white">
              Catogory
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>git</option>
                <option>docker</option>
                <option>kubernetes</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <TestSection test={test} />
        <div className="flex justify-end mx-4 my-4">
          <button className="block px-5 py-2 mt-4 mb-2 font-medium leading-5 text-center   capitalize bg-gray-500 text-white rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-600 focus:outline-none focus:bg-blue-600 dark:bg-blue-600">
            修正完了
          </button>
        </div>
      </form>
      {errors}
      {deleteErrors}
      <div className="flex justify-start mx-4 my-4">
        <button
          className="block px-5 py-2 mt-4 font-medium leading-5 text-center   capitalize bg-red-600 text-white rounded-lg lg:mt-0 hover:bg-red-500 hover:text-white lg:w-autohover:bg-red-500 focus:outline-none focus:bg-red-500"
          onClick={() => setShowModal(true)}
        >
          削除
        </button>
      </div>
      {showModal ? (
        <Modal setter={setShowModal} setErrors={setDeleteErrors} />
      ) : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { questionId } = ctx.query;
  const headers: any = ctx.req.headers;

  try {
    const { data } = await axios.get(
      `${domain.kubernetes}/api/questions/${questionId}`,
      {
        headers: headers,
      }
    );
    return {
      props: { question: data, errorCode: null },
    };
  } catch (err) {
    const errorCode = 404;
    return {
      props: { test: null, errorCode: errorCode },
    };
  }
};

export default QuestionShow;
