import React, { useState, useEffect } from 'react';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import axios from 'axios';
import ProgressBar from '../components/progressBar';
import { testResultCalc } from '../src/func/testResultCalc';
import { QuestionDoc } from '../src/interface/testresult/questionDoc';
import TestResultRow from '../components/testResultRow';
import Error from 'next/error';
import { domain } from '../src/config/keys';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Mypage: NextPage<Props> = ({ result, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }
  const rate = testResultCalc(result);
  const [gitCompleted, setGitCompleted] = useState(rate.gitCompletedRate);
  const [dockerCompleted, setDockerCompleted] = useState(
    rate.dockerCompletedRate
  );
  const [kubectlCompleted, setKubectlCompleted] = useState(
    rate.kubectlCompletedRate
  );

  useEffect(() => {}, []);

  return (
    <div>
      <div className="container flex max-w-screent-2xl mx-auto">
        <div className="container  lg:flex lg: flex-col  lg:max-w-md mt-6  mx-2 shadow-md rounded-3xl  overflow-hidden dark:bg-gray-700">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white">
            <span>git</span>
          </div>
          <div className=" my-4">
            <div className="flex flex-col pl-4  pt-1">
              <span className="font-bold dark:text-white">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-9/12 mx-auto">
              <ProgressBar bgcolor={'#6a1b9a'} completed={gitCompleted} />
            </div>
          </div>
        </div>
        <div className="container  lg:flex lg:flex-col mx-auto lg:max-w-md mt-6 mr-2 shadow-md rounded-3xl  overflow-hidden dark:bg-gray-700">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white">
            <span>docker</span>
          </div>
          <div className="my-4">
            <div className="flex flex-col pl-4 pt-1">
              <span className="font-bold dark:text-white">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-9/12 mx-auto">
              <ProgressBar bgcolor={'#6a1b9a'} completed={dockerCompleted} />
            </div>
          </div>
        </div>
        <div className="container  lg:flex lg:flex-col mx-auto lg:max-w-md mt-6 mr-2 shadow-md rounded-3xl  overflow-hidden dark:bg-gray-700">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white">
            <span>kubectl</span>
          </div>
          <div className="my-4">
            <div className="flex flex-col pl-4 pt-1">
              <span className="font-bold dark:text-white">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-9/12 mx-auto">
              <ProgressBar bgcolor={'#6a1b9a'} completed={kubectlCompleted} />
            </div>
          </div>
        </div>
      </div>
      <div className="container pl-4 pt-6 flex flex-col max-w-screen-2xl mx-auto sm:mr-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <div className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 text-2xl bg-gray-400 font-bold uppercase dark:text-white dark:bg-gray-800 ">
                Test Status Detail
              </div>
              <table className="min-w-full">
                <thead className="bg-white dark:bg-blue-800">
                  <tr className="bg-blue-200 dark:bg-blue-800">
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase "
                    >
                      Lesson No
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase "
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase"
                    >
                      完了状況
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {result.questions.map((test: QuestionDoc, index: number) => {
                    return <TestResultRow key={index} test={test} id={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers: any = context.req.headers;

  try {
    const { data } = await axios.get(`${domain.kubernetes}/api/users`, {
      headers: headers,
    });

    return {
      props: { result: data, errorCode: null },
    };
  } catch (err) {
    const errorCode = 404;
    return {
      props: { result: null, errorCode: errorCode },
    };
  }
};

export default Mypage;
