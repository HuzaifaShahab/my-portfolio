import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CounterItem as CounterItemType } from '../types';

interface CounterItemProps {
  item: CounterItemType;
  isVisible: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ item, isVisible }) => {
  const count = useCounter({
    end: item.value,
    duration: 2000,
    isActive: isVisible,
  });

  return (
    <div className="text-center">
      <div className="text-6xl md:text-7xl font-bold text-green-400 mb-4 font-mono">
        {item.id === 'technologies' ? `${count}+` : count}
      </div>
      <div className="text-gray-400 font-mono text-sm tracking-wider">
        {item.label}
      </div>
    </div>
  );
};

interface CounterProps {
  items: CounterItemType[];
}

const Counter: React.FC<CounterProps> = ({ items }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto"
    >
      {items.map((item) => (
        <CounterItem key={item.id} item={item} isVisible={isIntersecting} />
      ))}
    </div>
  );
};

export default Counter;