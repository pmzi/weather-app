import classNames from 'classnames';
import { useState } from 'react';

import styles from './forecastDaysTabManager.module.scss';

interface TabInfo {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface ForecastDaysTabManagerProps {
  tabsInfo: TabInfo[];
}

export default function ForecastDaysTabManager({ tabsInfo }: ForecastDaysTabManagerProps) {
  const [currentTab, setCurrentTab] = useState<TabInfo | null>(tabsInfo?.[0] || null);

  function changeTab(id: string) {
    const foundTab = tabsInfo.find((tab) => tab.id === id);
    setCurrentTab(foundTab || null);
  }

  const tabTitleItems = tabsInfo.map(({ id, title }) => (
    <button
      className={classNames(styles.ForecastDaysTabManager__tabButton, {
        [styles['ForecastDaysTabManager__tabButton--active']]: id === currentTab?.id,
      })}
      type="button"
      tabIndex={0}
      onClick={() => changeTab(id)}
      key={id}
    >
      {title}
    </button>
  ));
  return (
    <div>
      <header className={styles.ForecastDaysTabManager__header}>
        {tabTitleItems}
      </header>

      <div>
        {currentTab?.content}
      </div>
    </div>
  );
}
