import React from 'react';
import Counter from './Counter';
import { COUNTER_ITEMS } from '../constants';

const CounterSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <Counter items={COUNTER_ITEMS} />
      </div>
    </section>
  );
};

export default CounterSection;