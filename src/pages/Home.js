import React from 'react';
import Banner from '../Shared/Banner';
import Story from '../Shared/Story';
import BuildingsandOccupants from '../Shared/BuildingsandOccupants';
import CorporateViewpoint from '../Shared/CorporateViewpoint';
import MessageFromtheChairman from '../Shared/MessageFromtheChairman';
import Product from '../Shared/Product';
import SisterConcern from '../Shared/SisterConcern';
import ManagingDirectorMessage from '../Shared/ManagingDirectorMessage';
import Facilities from '../Shared/Facilities';
import OurClients from '../Shared/OurClients';
import MessagefromtheDirector from '../Shared/MessagefromtheDirector';
import Contact from '../Shared/Contact';
import Map from '../Shared/Map';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Story></Story>
      <BuildingsandOccupants></BuildingsandOccupants>
      <CorporateViewpoint></CorporateViewpoint>
      <MessageFromtheChairman></MessageFromtheChairman>
      <Product></Product>
      <SisterConcern></SisterConcern>
      <ManagingDirectorMessage></ManagingDirectorMessage>
      <Facilities></Facilities>
      <OurClients></OurClients>
      <MessagefromtheDirector></MessagefromtheDirector>
      <Contact></Contact>
      <Map></Map>
    </div>
  );
};

export default Home;