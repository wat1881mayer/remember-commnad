import React, { useState } from 'react';

const TestSection = ({ props }) => {
  return (
    <div className="block border mx-4 mb-6 mt-8 ">
      <div className=" px-3 mb-6 md:mb-0">
        <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 uppercase">
          問題文
        </label>
        <input
          className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          value={props.statement}
          placeholder="例.kubernetesの起動中のpodを一覧で表示するコマンドは以下の内どれか"
          onChange={(e) => props.handleonChangeEventofStatement(e)}
        />
      </div>
      <div className="block px-3 md-b md:mb-0">
        <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 uppercase">
          選択肢一覧
        </label>
        <div className="block flex">
          <div className="my-2">選択肢 1</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={props.select1}
              placeholder="例.kubectl apply pods"
              onChange={(e) => props.handleonChangeEventofSelect1(e)}
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2">選択肢 2</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={props.select2}
              placeholder="例.kubectl apply pods"
              onChange={(e) => props.handleonChangeEventofSelect2(e)}
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2">選択肢 3</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={props.select3}
              placeholder="例.kubectl apply pods"
              onChange={(e) => props.handleonChangeEventofSelect3(e)}
            />
          </div>
        </div>
        <div className="block flex">
          <div className="my-2">選択肢 4</div>
          <div className=" ml-2 flex-grow">
            <input
              className="appearance-none block w-full  bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={props.select4}
              placeholder="例.kubectl apply pods"
              onChange={(e) => props.handleonChangeEventofSelect4(e)}
            />
          </div>
        </div>
        <div className=" px-3 mb-6 md:mb-0">
          <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 uppercase">
            正答番号
          </label>
          <input
            className="appearance-none block bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={props.correct}
            type="number"
            placeholder=""
            onChange={(e) => props.handleonChangeEventofCorrect(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default TestSection;
