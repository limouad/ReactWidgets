import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is awesome'
    },
    {
        title: 'How do you use React?',
        content: 'Components, components, components'
    }
];

const App = () => {
    
    return(
        <Accordion items={items} />
    );
}

export default App;