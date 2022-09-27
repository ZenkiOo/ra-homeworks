import style from '../components/Steps/steps.module.css';
import { StepsInput } from '../components/Steps/StepsInput';
import { StepsHeader } from '../components/Steps/StepsHeader';
import { Steps } from '../components/Steps/Steps';
import { useState } from 'react';

const StepsPage = () => {
  const [state, setState] = useState({
    date: '',
    traveled: '',
    all: [],
    isEdit: false,
  });

  const handleChange = (e) => {
    const { target } = e;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRemove = (id) => {
    setState((prevState) => ({
      ...prevState,
      all: prevState.all.filter((o) => o.id !== id),
    }));
  };

  const handleEdit = (id) => {
    if (!state.isEdit) {
      const steps = state.all;
      const step = steps.find((o) => o.id === id);

      setState((prevState) => {
        if (step) {
          step.onEdit = true;
          return {
            ...prevState,
            date: step.date,
            traveled: step.traveled,
            isEdit: true,
          };
        }
      });
    } else {
      console.log('onedit');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!state.isEdit) {
      const stateDate = state.date.repeat(1);
      const stateDateIso = stateDate.split('.').reverse().join('-');
      const stateDateMillis = Date.parse(stateDateIso);
      const stateAll = Object.assign([], state.all);
      const onEditStep = stateAll.find((step) => +step.id === stateDateMillis);

      if (onEditStep) {
        onEditStep.traveled = +onEditStep.traveled + +state.traveled;
        setState((prevState) => ({
          ...prevState,
          date: '',
          traveled: '',
          all: [...stateAll],
        }));
      } else {
        const step = {
          id: stateDateMillis,
          date: state.date,
          traveled: +state.traveled,
          onEdit: false,
        };
        setState((prevState) => ({
          ...prevState,
          date: '',
          traveled: '',
          all: [...prevState.all, step],
        }));
      }
      
    } else if (state.isEdit) {
      const stateAll = Object.assign([], state.all);
      const onEditStep = stateAll.find((step) => step.onEdit);
      onEditStep.traveled = +state.traveled;
      onEditStep.onEdit = false;
      setState((prevState) => ({
        ...prevState,
        date: '',
        traveled: '',
        all: [...stateAll],
        isEdit: false,
      }));
    }
  };

  return (
    <section className={style['StepsPage']}>
      <div className={style['steps']}>
        <StepsHeader />
        <StepsInput
          onInputChange={handleChange}
          onFormSubmit={onSubmit}
          date={state.date}
          traveled={state.traveled}
        />
        <StepsHeader actions />
        <Steps
          items={[...state.all].sort((a, b) => +a.id - +b.id)}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      </div>
    </section>
  );
};
export { StepsPage };
