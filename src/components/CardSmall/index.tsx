import './index.css';

import { Card, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import type { CardSmallProps } from './index.d';
import moment from 'moment';

const { Meta } = Card;
const { Text, Title } = Typography;

export default function CardSmall({ item }: CardSmallProps) {
  return (
    <Card
      className="card-small"
      hoverable
      cover={<img alt="example" src={item.urlToImage} />}
    >
      <div className="card-small__body">
        <span>{moment(item.publishedAt).calendar()} </span>
        <Link
          to={`/detail?title=${item.title}%sources=${item.source.id}`}
          state={item}
        >
          {item.title}
        </Link>
      </div>
    </Card>
  );
}
