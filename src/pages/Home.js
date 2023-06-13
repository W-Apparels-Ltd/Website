import React from 'react';
import Banner from '../Shared/Banner';
import Story from '../Shared/Story';
import BuildingsandOccupants from '../Shared/BuildingsandOccupants';
import CorporateViewpoint from '../Shared/CorporateViewpoint';
import MessageFromtheChairman from '../Shared/MessageFromtheChairman';
import SisterConcern from '../Shared/SisterConcern';
import ManagingDirectorMessage from '../Shared/ManagingDirectorMessage';
import Facilities from '../Shared/Facilities';
import OurClients from '../Shared/OurClients';
import Contact from '../Shared/Contact';
import ProductSlider from '../Shared/ProductSlider';
import { ToastContainer } from 'react-toastify';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Story></Story>
      <BuildingsandOccupants></BuildingsandOccupants>
      <CorporateViewpoint></CorporateViewpoint>
      <MessageFromtheChairman></MessageFromtheChairman>
      <ProductSlider></ProductSlider>
      <SisterConcern></SisterConcern>
      <ManagingDirectorMessage></ManagingDirectorMessage>
      <Facilities></Facilities>
      <OurClients></OurClients>
      <Contact></Contact>
      
      <ToastContainer/>

     
    </div>
  );
};

export default Home;