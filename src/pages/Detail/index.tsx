import React from 'react';
import './index.css';
import moment from 'moment';
import { Navigate, useLocation } from 'react-router-dom';
import { Col, Divider, Row, Typography } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import CardSmall from '../../components/CardSmall';
import type { ArticlesProps } from '../Home/components/Carousel/index.d';
import { useGetHighlightQuery } from '../../features/Highlight/highlightApi';

const { Title, Text, Paragraph, Link } = Typography;

export default function DetailScreen() {
  const location = useLocation();
  const query = location.search;

  const data: ArticlesProps = location.state;
  const { data: news, isLoading, error } = useGetHighlightQuery(query);

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="detail">
      <div className="container-fluid">
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <div className="detail__box">
              <Title level={2}>{data.title}</Title>
              <div className="detail__info">
                <Text strong>
                  <UserOutlined /> {data.author}
                </Text>
                <Text>
                  <FieldTimeOutlined /> {moment(data.publishedAt).calendar()}
                </Text>
              </div>
              <div className="detail__body">
                <img
                  title={data.urlToImage}
                  src={data.urlToImage}
                  alt={data.urlToImage}
                />

                <Paragraph>
                  {data.description}{' '}
                  <Link href={data.url} target="_blank">
                    Baca Selengkapnya
                  </Link>
                </Paragraph>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="detail__box bgGray">
              <div className="detail__box-small">
                <Title level={4}>Berita Lainnya</Title>
                <Divider></Divider>
                {isLoading ? (
                  <></>
                ) : (
                  <Row gutter={[16, 16]}>
                    {news?.articles.map((item: ArticlesProps, i: number) => (
                      <Col key={i}>
                        <CardSmall item={item} />
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
