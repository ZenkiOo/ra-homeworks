import items from '../components/data/etsy.json';
import { Listing } from '../components/Listing/Listing';

const ListingPage = () => {
  return (
    <div className='listing'>
      <Listing items={items}/>
    </div>
  );
};
export { ListingPage };
