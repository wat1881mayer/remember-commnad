import React, { useState } from 'react';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import axios from 'axios';
import TestRow from '../components/testRow';
import { QuestionDoc } from '../src/interface/testlist/questionDoc';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Test: NextPage<Props> = ({ tests }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="container flex flex-col mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Lesson
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Test</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test: QuestionDoc, index: number) => {
                    return <TestRow key={index} test={test} id={index} />;
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
  const { data } = await axios.get(
    'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/questions',
    {
      headers: {
        Host: 'ticketing.dev',
      },
    }
  );
  return {
    props: { tests: data },
  };
};

export default Test;
