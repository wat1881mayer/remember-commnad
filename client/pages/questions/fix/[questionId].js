import React, { useState, useContext } from 'react';
import useRequest from '../../../hooks/use-request';
import Router from 'next/router';
import TestSection from '../../../components/testSection';
import Modal from '../../../components/modal';
import { SnackbarContext } from '../../../context/snackbar-context';

import { useRouter } from 'next/router';

const QuestionShow = ({ question }) => {
  const { toggleSnack } = useContext(SnackbarContext);
  const current_path = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(question.category);
  const [statement, setStatement] = useState(question.statement);
  const [select1, setSelect1] = useState(question.selection[0]);
  const [select2, setSelect2] = useState(question.selection[1]);
  const [select3, setSelect3] = useState(question.selection[2]);
  const [select4, setSelect4] = useState(question.selection[3]);
  const [correct, setCorrect] = useState(question.correct);

  const handleonChangeEventofStatement = (e) => setStatement(e.target.value);
  const handleonChangeEventofSelect1 = (e) => setSelect1(e.target.value);
  const handleonChangeEventofSelect2 = (e) => setSelect2(e.target.value);
  const handleonChangeEventofSelect3 = (e) => setSelect3(e.target.value);
  const handleonChangeEventofSelect4 = (e) => setSelect4(e.target.value);
  const handleonChangeEventofCorrect = (e) => setCorrect(e.target.value);

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

  const onSubmit = async (event) => {
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
      <form className="w-full max-w-7xl" onSubmit={onSubmit}>
        <div className="flex flex-wrap mx-4 mb-20 mt-8">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 uppercase">
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
        <TestSection props={test} />
        {errors}
        <div className="flex justify-end mx-4 my-4">
          <button className="block px-5 py-2 mt-4 font-medium leading-5 text-center   capitalize bg-gray-500 text-white rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            修正完了
          </button>
        </div>
      </form>
      <div className="flex justify-start mx-4 my-4">
        <button
          className="block px-5 py-2 mt-4 font-medium leading-5 text-center   capitalize bg-red-400 text-white rounded-lg lg:mt-0 hover:bg-red-600 hover:text-white lg:w-autohover:bg-red-600 focus:outline-none focus:bg-red-600"
          onClick={() => setShowModal(true)}
        >
          削除
        </button>
      </div>
      {showModal ? <Modal setter={setShowModal} /> : null}
    </div>
  );
};

QuestionShow.getInitialProps = async (context, client) => {
  console.log(context.query);
  const { questionId } = context.query;
  const { data } = await client.get(`/api/questions/${questionId}`);

  return { question: data };
};

export default QuestionShow;
