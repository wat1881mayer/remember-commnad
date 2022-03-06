import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ResultRequest = ({ url, method, body, onSuccess, currentUser }) => {
  const [errors, setErrors] = useState(null);
  const [resultForm, setResultForm] = useState(null);
  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        if (response.data.status === 'success') {
          setResultForm(
            <div className="flex justify-end">
              <Link href="/testlist">
                <a className="justify-end  px-5 py-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center   capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white">
                  テスト一覧へ
                </a>
              </Link>
              {currentUser && (
                <Link href="/mypage">
                  <a className="justify-end px-5 py-2 ml-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center   capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white">
                    成績を確認
                  </a>
                </Link>
              )}
            </div>
          );
        }

        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className="flex w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 bg-red-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-red-500 dark:text-red-400">
                Error
              </span>
              <ul className="text-sm text-gray-600 dark:text-gray-200">
                {err.response.data.errors.map((err) => (
                  <li key={err.message}>{err.message}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  return { doRequest, resultForm, errors };
};

export default ResultRequest;
