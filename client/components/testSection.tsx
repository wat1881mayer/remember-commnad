import React, { useState } from 'react';
import { questionProps } from '../src/type/question';

interface AppProps {
  test?: questionProps;
}

const TestSection: React.FC<AppProps> = ({ test }) => {
  return (
    <div className="block  mx-4 mb-6 mt-8 ">
      <div className=" px-3 mb-6 md:mb-0">
        <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold font-bold mb-2 uppercase dark:text-white">
          問題文
        </label>
        <input
          className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          value={test!.statement}
          placeholder="例.kubernetesの起動中のpodを一覧で表示するコマンドは以下の内どれか"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            test!.handleonChangeEventofStatement(e.target.value)
          }
        />
      </div>
      <div className="block px-3 md-b md:mb-0">
        <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white">
          選択肢一覧
        </label>
        <div className="block flex">
          <div className="my-2 dark:text-white">選択肢 1</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={test!.select1}
              placeholder="例.kubectl apply pods"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                test!.handleonChangeEventofSelect1(e.target.value)
              }
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2 dark:text-white">選択肢 2</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={test!.select2}
              placeholder="例.kubectl apply pods"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                test!.handleonChangeEventofSelect2(e.target.value)
              }
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2 dark:text-white">選択肢 3</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={test!.select3}
              placeholder="例.kubectl apply pods"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                test!.handleonChangeEventofSelect3(e.target.value)
              }
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2 dark:text-white">選択肢 4</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={test!.select4}
              placeholder="例.kubectl apply pods"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                test!.handleonChangeEventofSelect4(e.target.value)
              }
            />
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white">
            正答番号
          </label>
          <input
            className="appearance-none block bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={test!.correct}
            type="number"
            placeholder=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              test!.handleonChangeEventofCorrect(Number(e.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TestSection;
