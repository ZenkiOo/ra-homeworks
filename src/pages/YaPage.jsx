import style from '../components/Yandex/yandex.module.css';
import YandexData from '../components/data/YandexData';
import { Tabs } from '../components/Yandex/Tabs';
import { LastNews } from '../components/Yandex/LastNews';
import { Search } from '../components/Yandex/Search';
import { Advertising } from '../components/Yandex/Advertising';
import { FooterItem } from '../components/Yandex/FooterItem';
import { Weather } from '../components/Yandex/Weather';
import { Haunted } from '../components/Yandex/Haunted';
import { Germany } from '../components/Yandex/Germany';
import { TimeTable } from '../components/Yandex/TimeTable';
import { BroadCast } from '../components/Yandex/BroadCast';

const YaPage = () => {
  const { data } = new YandexData();
  return (
    <section className={style['ya_page']}>
      <Tabs items={data.tabs} date={'31 июля, среда 02:32'} />
      <LastNews
        items={data.news}
        currency={data.currency}
        mainNewsItem={data.mainNewsItem}
      />
      <Search searchTabs={data.searchTabs} randomSearch={data.randomSearch} />
      <Advertising link={data.advertising.link} img={data.advertising.img} />
      <footer className={style['footer']}>
        <div className={style['footer__column']}>
          <FooterItem title="Погода">
            <Weather weather={data.weather} />
          </FooterItem>
          <FooterItem title="Посещаемое">
            <Haunted items={data.haunted} />
          </FooterItem>
        </div>
        <div className={style['footer__column']}>
          <FooterItem title="Карта Германии">
            <Germany />
          </FooterItem>
          <FooterItem title="Телепрограмма">
            <TimeTable items={data.timeTable} />
          </FooterItem>
        </div>
        <div className={style['footer__column']}>
          <FooterItem title="Эфир">
            <BroadCast items={data.broadcast} />
          </FooterItem>
        </div>
      </footer>
    </section>
  );
};
export { YaPage };
