// common
import './index.css';
import type { ArticlesProps } from './index.d';
import { defaultImage } from '../../../../contants';
// component
import { Carousel } from 'antd';

// api
import { useGetHighlightQuery } from '../../../../features/Highlight/highlightApi';

export default function CarouselSection() {
  const { data, isLoading, error } = useGetHighlightQuery();

  return (
    <div className="carousel">
      <Carousel autoplay speed={1000} autoplaySpeed={5000}>
        {data?.articles.slice(0, 4).map((item, i) => (
          <div key={i} className="carousel__headline">
            <img
              src={item.urlToImage ? item.urlToImage : defaultImage}
              alt=""
            />
            <div className="carousel__box">
              <div className="carousel__container">
                <div className="carousel__card">
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
