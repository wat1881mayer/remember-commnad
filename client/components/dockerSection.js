import React from 'react';
import CommandSection from './commandSection';
import { dockerCommandList } from '../src/dockerCommandList';

const DockerSection = () => {
  return (
    <section className="flex flex-col w-full px-0 md:px-2 space-y-6 dark:bg-gray-800">
      <div className="w-full dark:bg-gray-800">
        <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
          <header className="border-b border-gray-300 p-2">
            <h2 className="text-xl font-bold text-gray-800">Docker</h2>
          </header>
          <CommandSection commandList={dockerCommandList} />
        </div>
      </div>
    </section>
  );
};

export default DockerSection;
