import React from 'react';
import Banner from '../Banner/Banner';
import History from '../History/History';
import PeopleInformation from '../PeopleInformation/PeopleInformation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PeopleInformation/>
            <History></History>
        </div>
    );
};

export default Home;