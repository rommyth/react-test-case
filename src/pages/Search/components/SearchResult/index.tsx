import React from 'react';
import { useGetEverythingQuery } from '../../../../features/Everything/everythingApi';
import { Col, Divider, Row, Typography } from 'antd';
import { useSearchParams, useLocation } from 'react-router-dom';
import CardSmallHorizontal from '../../../../components/CardSmallHorizontal';

export default function SearchResult() {
  const query = useLocation().search;
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q');
  const { data: news, isLoading, error } = useGetEverythingQuery(query);

  // ----------------
  // general funtion
  // ----------------

  return (
    <div className=" block search__result">
      <Typography.Title>Search Result : {search}</Typography.Title>
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        {news?.articles.map((item, i) => (
          <Col key={i}>
            <CardSmallHorizontal item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
