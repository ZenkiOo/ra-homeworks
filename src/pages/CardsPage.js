import style from '../components/Cards/cards.module.css';
import Cards from '../components/data/Cards';
import { Card } from '../components/Cards/Card';
import { CardBody } from '../components/Cards/CardBody';
import { CardButton } from '../components/Cards/CardButton';
import { CardImage } from '../components/Cards/CardImage';

const CardsPage = () => {
  const { cards } = new Cards();
  const imgHref =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQim7-1KU_ded53zl_QHwugiZkX1U1fNZ4g&usqp=CAU';
    
  return (
    <section className={style['cards']}>
      <Card image={<CardImage href={imgHref} name={'image'} />}>
        <CardBody title={cards[0].title} text={cards[0].text} />
        <CardButton />
      </Card>
      <Card>
        <CardBody title={cards[1].title} text={cards[1].text} />
        <CardButton />
      </Card>
    </section>
  );
};
export { CardsPage };
