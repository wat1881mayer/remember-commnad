import React from 'react';
import Link from 'next/link';
import { QuestionDoc } from '../src/interface/testresult/questionDoc';

interface AppProps {
  id: number;
  test: QuestionDoc;
}

const TestResultRow: React.FC<AppProps> = ({ id, test }) => {
  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-800 dark:bg-gray-700">
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Lesson:{id + 1}
      </td>
      <td className="py-4 px-6 text-sm dark:text-white whitespace-nowrap ">
        {test.category}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap dark:text-white">
        {test.answered ? '完了' : '未完了'}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <Link href="/tests/[testId]" as={`/tests/${test.testId}`}>
          <a className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
            挑戦
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default TestResultRow;
