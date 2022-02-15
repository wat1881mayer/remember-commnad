import React from 'react';
import CommandSection from './commandSection';
import { gitCommandList } from '../src/gitCommandList';

const GitSection = ({ tool, commandList }) => {
  return (
    <section className="flex flex-col w-full px-0 md:px-2 space-y-6 dark:bg-gray-800">
      <div className="w-full dark:bg-gray-800">
        <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
          <header className="border-b border-gray-300 p-2">
            <h2 className="text-xl font-bold text-gray-800">{tool}</h2>
          </header>
          <CommandSection commandList={commandList} />
        </div>
      </div>
    </section>
  );
};

export default GitSection;
