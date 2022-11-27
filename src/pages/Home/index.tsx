import React, { useState } from 'react';
import CardListSection from './components/CardList';
import CarouselSection from './components/Carousel';

import { useGetHighlightQuery } from '../../features/Highlight/highlightApi';

export default function HomeScreen() {
  return (
    <div className="home">
      <CarouselSection />
      <CardListSection />
    </div>
  );
}
