import React from 'react';
import Link from 'next/link';

const TestRow = ({ id, test }) => {
  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Lesson:{id + 1}
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {test.category}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <Link
          href="/questions/fix/[questionId]"
          as={`/questions/fix/${test.id}`}
        >
          <a className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
            編集
          </a>
        </Link>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <Link href="/questions/[questionId]" as={`/questions/${test.id}`}>
          <a className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
            挑戦
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default TestRow;
