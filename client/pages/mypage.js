import React from 'react';
import ProgressVar from '../components/progressvar';

const Mypage = () => {
  return (
    <div>
      <div className="container flex max-w-screent-2xl mx-auto">
        <div className="container  flex flex-col mx-auto max-w-md mt-6 shadow-md rounded-3xl  overflow-hidden">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 ">
            <span>git</span>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col pl-4 pt-1">
              <span className="font-bold">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-1/2">
              <ProgressVar />
            </div>
          </div>
        </div>
        <div className="container  flex flex-col mx-auto max-w-md mt-6 shadow-md rounded-3xl  overflow-hidden">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 ">
            <span>docker</span>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col pl-4 pt-1">
              <span className="font-bold">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-1/2">
              <ProgressVar />
            </div>
          </div>
        </div>
        <div className="container  flex flex-col mx-auto max-w-md mt-6 shadow-md rounded-3xl  overflow-hidden">
          <div className="font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 ">
            <span>kubectl</span>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col pl-4 pt-1">
              <span className="font-bold">Progress</span>
            </div>
            <div className="flex flex-col pl-4 pt-3 w-1/2">
              <ProgressVar />
            </div>
          </div>
        </div>
      </div>
      <div className="container pl-4 pt-6 flex flex-col max-w-screen-2xl mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <div className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 text-2xl bg-gray-400 font-bold uppercase dark:text-white dark:bg-gray-700 ">
                Test Status Detail
              </div>
              <table className="min-w-full">
                <thead className="bg-white dark:bg-gray-600">
                  <tr className="bg-blue-200">
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase "
                    >
                      Docker
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400"
                    >
                      Progress
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400"
                    >
                      Completed
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:bg-gray-600 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Sliver
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Laptop
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $2999
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        テスト
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-600  dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Imac 27"
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Desktop Pc
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $1999
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-600 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      iPhone 13 Pro
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Phone
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $999
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-600  dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Magic Mouse 2
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Accessories
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $99
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-600 dark:border-gray-600">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Watch Series 7
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Pink
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Accessories
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $599
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
