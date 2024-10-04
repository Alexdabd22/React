import React from 'react';
import Timeline from './components/Timeline';
import './App.css';

const events = [
  { id: 1, title: '1990', wikiLink: 'https://uk.wikipedia.org/wiki/1990' },
  { id: 2, title: '1991', wikiLink: 'https://uk.wikipedia.org/wiki/1991' },
  { id: 3, title: '1992', wikiLink: 'https://uk.wikipedia.org/wiki/1992' },
  { id: 4, title: '1993', wikiLink: 'https://uk.wikipedia.org/wiki/1993' },
  { id: 5, title: '1994', wikiLink: 'https://uk.wikipedia.org/wiki/1994' },
  { id: 6, title: '1995', wikiLink: 'https://uk.wikipedia.org/wiki/1995' },
  { id: 7, title: '1996', wikiLink: 'https://uk.wikipedia.org/wiki/1996' },
  { id: 8, title: '1997', wikiLink: 'https://uk.wikipedia.org/wiki/1997' },
  { id: 9, title: '1998', wikiLink: 'https://uk.wikipedia.org/wiki/1998' },
  { id: 10, title: '1999', wikiLink: 'https://uk.wikipedia.org/wiki/1999' },
  { id: 11, title: '2000', wikiLink: 'https://uk.wikipedia.org/wiki/2000' },
  { id: 12, title: '2001', wikiLink: 'https://uk.wikipedia.org/wiki/2001' },
];


function App() {
  return (
      <div className="App">
        <h1>Таймлайн історичних подій</h1>
        <Timeline events={events} />
      </div>
  );
}

export default App;
