import { Col, Divider, Row } from 'antd';
import React from 'react';
import CardSmall from '../../../../components/CardSmall';
import { useGetHighlightQuery } from '../../../../features/Highlight/highlightApi';
import './index.css';
export default function NewsHighlight() {
  const { data: highlight, isLoading, error } = useGetHighlightQuery();
  return (
    <div className="search__highlight">
      <h3>Berita Lainnya</h3>
      <Row gutter={[16, 16]}>
        {highlight?.articles.map((item, i) => (
          <Col key={i}>
            <CardSmall item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
