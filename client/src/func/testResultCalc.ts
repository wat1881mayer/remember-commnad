import { CategorResult } from '../type/category-result';

export const testResultCalc = (result: any): CategorResult => {
  let gitCompletedCount = 0;
  let dockerCompletedCount = 0;
  let kubectlCompletedCount = 0;
  let gitQuestions = 0;
  let dockerQuestions = 0;
  let kubectlQuestions = 0;

  if (result) {
    for (const question of result.questions) {
      if (question.category === 'git') {
        gitQuestions++;
        if (question.answered) {
          gitCompletedCount++;
        }
      } else if (question.category === 'docker') {
        dockerQuestions++;
        if (question.answered) {
          dockerCompletedCount++;
        }
      } else if (question.category === 'kubectl') {
        kubectlQuestions++;
        if (question.answered) {
          kubectlCompletedCount++;
        }
      }
    }
  }
  const gitCompletedRate = Math.trunc((gitCompletedCount / gitQuestions) * 100);
  const dockerCompletedRate = Math.trunc(
    (dockerCompletedCount / dockerQuestions) * 100
  );
  const kubectlCompletedRate = Math.trunc(
    (kubectlCompletedCount / kubectlQuestions) * 100
  );

  return { gitCompletedRate, dockerCompletedRate, kubectlCompletedRate };
};
