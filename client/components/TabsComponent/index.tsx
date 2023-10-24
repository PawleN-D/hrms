// components/TabbedComponent.tsx
'use client';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabbedComponent: React.FC = () => {
  return (
    <Tabs>
      <TabList className="flex justify-center bg-blue-500">
        <Tab className="list-none p-4 m-4 relative">
          <span className="text-blue-500 bg-white px-4 py-2 rounded-lg">Tab 1</span>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-opacity-0 transition-all duration-300 opacity-0"></div>
        </Tab>
        <Tab className="list-none p-4 m-4 relative">
          <span className="text-blue-500 bg-white px-4 py-2 rounded-lg">Tab 2</span>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-opacity-0 transition-all duration-300 opacity-0"></div>
        </Tab>
        <Tab className="list-none p-4 m-4 relative">
          <span className="text-blue-500 bg-white px-4 py-2 rounded-lg">Tab 3</span>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-opacity-0 transition-all duration-300 opacity-0"></div>
        </Tab>
      </TabList>

      <TabPanel className="p-4 shadow-lg">
        <div>
          <h1>Content for Tab 1</h1>
          <p>This is more content for Tab 1. You can add any additional content here.</p>
        </div>
      </TabPanel>
      <TabPanel className="p-4 shadow-lg">
        <div>
          <h1>Content for Tab 2</h1>
          <p>This is more content for Tab 2. You can add any additional content here.</p>
        </div>
      </TabPanel>
      <TabPanel className="p-4 shadow-lg">
        <div>
          <h1>Content for Tab 3</h1>
          <p>This is more content for Tab 3. You can add any additional content here.</p>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabbedComponent;
