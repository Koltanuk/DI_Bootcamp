import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
    return (
        <div>
            <Greeting name="Alice" />
            <Counter />
            <UserCard name="Bob" age={28} />
            <UserCard />
            <DataFetcher />
        </div>
    );
};

export default App;