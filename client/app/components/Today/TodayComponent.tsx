// src/components/TodayComponent.tsx
import React from 'react';

interface TodayProps {
  news: string[];
  posts: string[];
}

const TodayComponent: React.FC<TodayProps> = ({ news, posts }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Today</h2>
      <div className="space-y-4">
        <h3 className="text-lg font-medium">News</h3>
        <ul className="list-disc pl-4">
          {news.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="text-lg font-medium">Posts</h3>
        <ul className="list-disc pl-4">
          {posts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayComponent;
