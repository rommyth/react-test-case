import React from 'react';
import './index.css';
import moment from 'moment';
import type { CardSmallHorizontalProps } from './index.d';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';

export default function CardSmallHorizontal({
  item,
}: CardSmallHorizontalProps) {
  const navigate = useNavigate();
  const defaultImage =
    'https://www.usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png';

  const handleCLick = () => {
    navigate(`/detail?title=${item.title}`, { state: item });
  };

  return (
    <div className="card-horizontal flex-row" onClick={handleCLick}>
      <img src={item.urlToImage ? item.urlToImage : defaultImage} alt="" />
      <div className="card-horizontal__body">
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <div className="card-horizontal__info">
          <span>
            <UserOutlined /> {item.source.name}
          </span>
          <span>
            <FieldTimeOutlined /> {moment(item.publishedAt).calendar()}
          </span>
        </div>
      </div>
    </div>
  );
}
