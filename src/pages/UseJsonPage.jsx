import { GetData } from '../components/UseJson/GetData';
import { GetError } from '../components/UseJson/GetError';
import { GetLoading } from '../components/UseJson/GetLoading';
const UseJsonPage = () => {
  return (
    <section style={{ padding: 70 + 'px' }}>
      <div>
        getData: <GetData />
      </div>
      <div>
        getError: <GetError />
      </div>
      <div>
        getLoading: <GetLoading />
      </div>
    </section>
  );
};
export { UseJsonPage };
