import { Col, Row } from 'antd';

import { useSearchParams, useLocation } from 'react-router-dom';
import { useGetHighlightQuery } from '../../features/Highlight/highlightApi';
import NewsHighlight from './components/NewsHighlight';
import SearchResult from './components/SearchResult';
export default function SearchScreen() {
  return (
    <div className="search">
      <div className="container-fluid">
        <Row gutter={24}>
          <Col md={{ span: 24 }} lg={{ span: 18 }}>
            <SearchResult />
          </Col>
          <Col md={{ span: 24 }} lg={{ span: 6 }}>
            <NewsHighlight />
          </Col>
        </Row>
      </div>
    </div>
  );
}
