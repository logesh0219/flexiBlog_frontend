import React from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import Css3Card from '../../Components/Css3Card/Css3Card';
import GatsbyCard from '../../Components/GatsbyCard/GatsbyCard';
import JavaScriptCard from '../../Components/JavaScriptCard/JavaScriptCard';
import ReactCard from '../../Components/ReactCard/ReactCard';
import CardData from '../../Assets/Data/CardData';
import SubscribeCard from '../../Components/SubscribeCard/SubscribeCard';

const Home = () => {

  const css3Data = CardData.find((category) => category.category === 'CSS3');
  const GatsbyData = CardData.find((category) => category.category === 'Gatsby');
  const JavaScriptData = CardData.find((category) => category.category === 'JavaScript');
  const ReactData = CardData.find((category) => category.category === 'React');

  return (
    <div className="">
      <div className="home">
        <div className='divider'> </div>
        <Banner />
        <div className='divider'> </div>
        <FeatureCard />
        <div className='divider'> </div>
        <ProfileCard />
        <div className='divider'></div>
        {css3Data && <Css3Card CSS3Data={css3Data} />}
        <div className='divider'></div>
        {GatsbyData && <GatsbyCard GatsbyData={GatsbyData} />}
        <div className='divider'></div>
        {JavaScriptData && <JavaScriptCard JavaScriptData={JavaScriptData} />}
        <div className='divider'></div>
        {ReactData && <ReactCard ReactData={ReactData} />}
        <div className='divider'></div>
        <SubscribeCard/>
      </div>
    </div>
  );
};

export default Home;
