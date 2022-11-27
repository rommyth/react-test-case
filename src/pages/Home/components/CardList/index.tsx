import './index.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetHighlightQuery } from '../../../../features/Highlight/highlightApi';

import { Card, Row, Col, Divider, Pagination } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function CardListSection() {
  const query = useLocation().search;
  const [searchParams, setSearchParams] = useSearchParams();
  const [defaultPage, setDefaultPage] = useState(1);
  const defaultImage =
    'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';

  const { data, isLoading, error } = useGetHighlightQuery(query);
  console.log(data);
  // -----------------
  // General Function
  // -----------------

  const handleChangePage = (page: number, pageSize: number) => {
    searchParams.set('page', page.toString());
    searchParams.set('pageSize', pageSize.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="block card-list">
      <div className="container-fluid">
        <div className="card-list__title">
          <Divider orientation="left">
            <h1>Highlight</h1>
          </Divider>
        </div>
        <Row gutter={[16, 16]}>
          {data?.articles.map((item, i) => (
            <Col key={i} span={8}>
              <Card
                className="card-list__card"
                hoverable
                cover={
                  <img
                    alt=""
                    src={item.urlToImage ? item.urlToImage : defaultImage}
                  />
                }
              >
                <div className="card-list__card-body">
                  <span>{moment(item.publishedAt).calendar()}</span>
                  <Link to={`/detail?title=${item.title}`} state={item}>
                    <h3 title={item.title}>{item.title}</h3>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
          {isLoading ? (
            <></>
          ) : (
            <div className="card-list__pagination">
              <Pagination
                defaultCurrent={defaultPage}
                total={data?.totalResults}
                onChange={(page, pageSize) => handleChangePage(page, pageSize)}
              />
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}
