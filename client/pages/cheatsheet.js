import React from 'react';
import DockerSection from '../components/dockerSection';
import { gitCommandList } from '../src/gitCommandList';
import { dockerCommandList } from '../src/dockerCommandList';
import { kubectlCommandList } from '../src/kubectlCommandList';
import ToolSection from '../components/toolSection';

const cheatsheet = () => {
  return (
    <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  pb-2 px-4 pt-20 lg:pt-4 lg:pl-2">
      <ToolSection tool="Git" commandList={gitCommandList} />
      <ToolSection tool="Docker" commandList={dockerCommandList} />
      <ToolSection tool="Kubectl" commandList={kubectlCommandList} />
    </div>
  );
};

export default cheatsheet;
