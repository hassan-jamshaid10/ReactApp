import React from 'react';
import { features } from '../../Constants';
import { Element } from 'react-scroll';

const FeaturesPage = () => {
  return (
  <section>
   <Element name="featuresPage">
    <div className='container'>
        <div className='relative flex'>
         {features.map((feature)=>(
            <div key={feature.id}>
            {feature.title}
            </div>
         ))}
        </div>
    </div>
   </Element>
  </section>
  )
};


export default FeaturesPage;
