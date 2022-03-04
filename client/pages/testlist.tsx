import React, { useEffect, useState } from 'react';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import axios from 'axios';
import TestRow from '../components/testRow';
import { QuestionDoc } from '../src/interface/testlist/questionDoc';
import CheckBoxGroup from '../components/CheckBoxGroup';
import { domain } from '../src/config/keys';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Test: NextPage<Props> = ({ tests }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [dockerCheck, setDockerCheck] = useState<boolean>(false);
  const [gitCheck, setGitCheckt] = useState<boolean>(false);
  const [kubectlCheck, setKubectkCheck] = useState<boolean>(false);

  const [viewList, setViewList] = useState<QuestionDoc[]>(tests);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const changeSelectedValue = (
    changedValues: string[],
    tests: QuestionDoc[],
    viewList: QuestionDoc[]
  ) => {
    setSelectedValues([...changedValues]);

    let selectedCategory = [];
    if (changedValues.length !== 0) {
      for (let category of changedValues) {
        for (let test of tests) {
          if (test.category === category) {
            selectedCategory.push(test);
          }
        }
      }
      setViewList([...selectedCategory]);
    } else {
      setViewList(tests);
    }
  };

  return (
    <div>
      <div className="container flex flex-col mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <CheckBoxGroup
              onChange={changeSelectedValue}
              selectedValues={selectedValues}
              tests={tests}
              viewList={viewList}
              checked={false}
              options={[
                { value: 'git', label: 1 },
                { value: 'docker', label: 2 },
                { value: 'kubectl', label: 3 },
              ]}
            />
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-200 dark:bg-gray700 dark:text-white">
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
                  {viewList.map((test: QuestionDoc, index: number) => {
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
  const headers: any = context.req.headers;
  console.log('domainkube', domain.kubernetes);
  const { data } = await axios.get(`${domain.kubernetes}api/questions`, {
    headers: headers,
  });
  return {
    props: { tests: data },
  };
};

export default Test;
