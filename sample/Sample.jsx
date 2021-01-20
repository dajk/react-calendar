import React, { useState } from 'react';
import Calendar from '../dist/esm/Calendar';

import '../dist/Calendar.css';
import './Sample.less';

export default function Sample() {
  const [range, setRange] = useState({ start: undefined, end: undefined });
  const [selector, setSelector] = useState('start');

  const handleChange = (date) => {
    const newRange = {
      ...range,
      [selector]: date,
    };
    setSelector(selector === 'start' ? 'end' : 'start');
    setRange(newRange);
  };

  return (
    <div className="Sample">
      <header>
        <h1>react-calendar sample page</h1>
      </header>
      <div className="Sample__container">
        <div>
          <div>
            <pre>
              {JSON.stringify(range, null, 2)}
            </pre>
          </div>
          <strong>{selector}</strong>
          <div>
            <button type="button" onClick={() => setSelector('start')}>Start</button>
            <button type="button" onClick={() => setSelector('end')}>End</button>
          </div>
        </div>
        <main className="Sample__container__content">
          <Calendar
            value={range.end ? [range.start, range.end] : range.start}
            selectRange
            showDoubleView
            minDetail="month"
            showNeighboringMonth={false}
            allowPartialRange
            returnValue={selector}
            onClickDay={handleChange}
            onActiveStartDateChange={console.log}
          />
        </main>
      </div>
    </div>
  );
}
