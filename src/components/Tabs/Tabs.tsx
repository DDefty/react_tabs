import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onChange: (tabId: string) => void;
};

export const Tabs = ({ tabs, selectedTabId, onChange }: TabsProps) => {
  const getTab = (tabId: string): Tab | undefined => {
    return tabs.find(tab => tab.id === tabId);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onChange(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTab(selectedTabId)?.content}
      </div>
    </div>
  );
};
