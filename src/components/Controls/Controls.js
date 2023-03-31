import React from 'react';
import css from '../Controls/Controls.module.css';

const Controls = ({ clickGood, clickNeutral, clickBad }) => (
  <div>
    <p className={css.title}>Pleace leave feedback</p>
    <ul className={css.list}>
      <li>
        <button className={css.button} type="button" onClick={clickGood}>
          Good
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={clickNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} type="button" onClick={clickBad}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);
export default Controls;
