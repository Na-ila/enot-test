import React from 'react';
import './newsLine.scss';
import { useQuery } from 'react-query';

import { newsDefaultText } from '../../App/utils';

import Skeleton from '@mui/material/Skeleton';

interface INews {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

const NewsLine = () => {
  const { isLoading, error, data } = useQuery('newsData', () =>
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((res) =>
        res
          .slice(0, 3)
          .reduce((acc: string, item: INews) => acc + item.body, '')
      )
  );

  return isLoading ? (
    <div className="skeleton">
      <Skeleton variant="text" sx={{ fontSize: '20px', height: '100%' }} />
    </div>
  ) : (
    <div className="newsline_container">
      <div className="newsline_content">{error ? newsDefaultText : data}</div>
    </div>
  );
};

export default NewsLine;
