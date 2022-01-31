import React from 'react';
import Command from './command';

const Gitsection = () => {
  const commandList = [
    {
      command: 'add',
      description: '引数に指定したファイルの変更をステージングする',
      optionName: '.',
      optionDescription: '変更された全てのファイルを指定する。',
    },
    {
      command: 'add',
      description: '引数に指定したファイルの変更をステージングする',
      optionName: '.',
      optionDescription: '変更された全てのファイルを指定する。',
    },
  ];

  return (
    <section className="flex flex-col w-full px-0 md:px-2 space-y-6 dark:bg-gray-800">
      <div className="w-full dark:bg-gray-800">
        <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
          <header className="border-b border-gray-300 p-2">
            <h2 className="text-lg font-semibold text-gray-800">Git</h2>
          </header>
          <Command commandList={commandList} />
        </div>
      </div>
    </section>
  );
};

export default Gitsection;
