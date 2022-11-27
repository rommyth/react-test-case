import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { useNavigateSearch } from './hooks/useNavigateSearch';

interface filterStateProps {
  title?: string;
  name?: string;
  publisher?: string;
}
export default function SearchScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query: filterStateProps = {};
  const navigateSearch = useNavigateSearch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const timed = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timed);
    };
  }, [searchParams]);

  const filterSeacrh = ({ title, name, publisher }: filterStateProps) => {
    if (title) searchParams.set('title', title);
    if (name) searchParams.set('name', name);
    if (publisher) searchParams.set('publisher', publisher);
  };

  const titleHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    e.preventDefault();
    filterSeacrh({ title: value });
  };
  const publisherHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    e.preventDefault();
    filterSeacrh({ publisher: value });
  };

  const nameHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filterSeacrh({ name: e.target.value });
    setSearchParams(searchParams);
    setIsLoading(true);
  };

  const submitSearch = () => {
    // navigateSearch(pathname, query);
    setSearchParams(searchParams);
    setIsLoading(true);
  };

  console.log('re-render');
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button
            type="button"
            onClick={(e) => titleHandler(e, 'Pembunuhan Joshua')}
          >
            Click Me Title
          </button>
          <button
            type="button"
            onClick={(e) => publisherHandler(e, 'detik.com')}
          >
            Click Me Publisher
          </button>
          <label>Name: </label>
          <select onChange={nameHandler}>
            <option disabled>Name</option>
            <option value="Rommy">Rommy</option>
            <option value="Taufik">Tauifk</option>
          </select>

          <button type={'button'} onClick={submitSearch}>
            Search
          </button>
        </>
      )}
    </div>
  );
}
