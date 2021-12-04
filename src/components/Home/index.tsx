import styles from './Home.module.scss';
import CityAndPageHandlerProvider from './CityAndPageHandlerProvider';
import HomeWrapper from './HomeWrapper';

export default function Home() {
  return (
    <CityAndPageHandlerProvider>
      <div className={styles.Home}>
        <HomeWrapper />
      </div>
    </CityAndPageHandlerProvider>
  );
}
