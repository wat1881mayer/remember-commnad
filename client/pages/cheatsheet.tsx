import React from 'react';
import { gitCommandList } from '../src/data/gitCommandList';
import { dockerCommandList } from '../src/data/dockerCommandList';
import { kubectlCommandList } from '../src/data/kubectlCommandList';
import ToolSection from '../components/toolSection';
import { NextPage } from 'next';

const cheatsheet: NextPage = () => {
  return (
    <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  pb-2 px-4 pt-20 lg:pt-4 lg:pl-2">
      <ToolSection tool="Git" commandList={gitCommandList} />
      <ToolSection tool="Docker" commandList={dockerCommandList} />
      <ToolSection tool="Kubectl" commandList={kubectlCommandList} />
    </div>
  );
};

export default cheatsheet;
