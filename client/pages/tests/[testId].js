import React, { useContext } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

import { SnackbarContext } from '../../context/snackbar-context';

const QuestionShow = ({ question }) => {
  const { toggleSnack } = useContext(SnackbarContext);
  const { doRequest, errors } = useRequest({
    url: '/api/questions',
    method: 'post',
    body: {
      questionId: question.id,
    },
    onSuccess: () => {
      toggleSnack(true, 'success', 'テスト修正完了しました。');
      Router.push('/testslist');
    },
  });
  return (
    <div>
      <h1>{question.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {errors}
      <button onClick={doRequest} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

QuestionShow.getInitialProps = async (context, client) => {
  console.log(context.query);
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/questions/${questionId}`);

  return { question: data };
};

export default QuestionShow;
