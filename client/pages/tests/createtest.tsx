import React, { useState, useContext } from 'react';
import Router from 'next/router';
import { NextPage } from 'next';

import TestSection from '../../components/testSection';
import useRequest from '../../hooks/use-request';
import { SnackbarContext } from '../../context/snackbar-context';
import { StringDispatch } from '../../src/type/dispatch';
import { questionProps } from '../../src/type/question';

const CreateTest: NextPage = () => {
  const { toggleSnack } = useContext(SnackbarContext);
  const [category, setCategory] = useState<string>('git');
  const [statement, setStatement] = useState<string>('');
  const [select1, setSelect1] = useState<string>('');
  const [select2, setSelect2] = useState<string>('');
  const [select3, setSelect3] = useState<string>('');
  const [select4, setSelect4] = useState<string>('');
  const [correct, setCorrect] = useState<number>(1);

  const handleonChangeEventofStatement = (value: string) => setStatement(value);
  const handleonChangeEventofSelect1 = (value: string) => setSelect1(value);
  const handleonChangeEventofSelect2 = (value: string) => setSelect2(value);
  const handleonChangeEventofSelect3 = (value: string) => setSelect3(value);
  const handleonChangeEventofSelect4 = (value: string) => setSelect4(value);
  const handleonChangeEventofCorrect = (value: number) => setCorrect(value);

  const { doRequest, errors } = useRequest({
    url: '/api/questions',
    method: 'post',
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
      toggleSnack(true, 'success', 'テストを作成しました。');
      Router.push('/');
    },
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await doRequest();
  };

  const question: questionProps = {
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
      <form
        className="w-full max-w-7xl shadow-md dark:bg-gray-700 "
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap mx-4 mb-20 mt-8">
          <div className="w-full md:w-1/4 px-3 mt-2 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white">
              Catogory
            </label>
            <div className="relative">
              <select
                className="block appearance-none shadow w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <TestSection test={question} />
        {errors}
        <div className="flex justify-end mx-4 my-4 mb-2">
          <button className="block px-5 py-2 mt-4 mb-2 font-medium leading-5 text-center   capitalize bg-blue-600 text-white rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            テスト作成
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTest;
