import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name,price,description, features} = pricing;
    return (
        <div className='flex flex-col bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-2xl'>{name}</h1>
                <h4>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-400 rounded-2xl p-4 mt-3 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature,index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-5 bg-black text-white">Subscribe</button>
        </div>
    );
};

export default PricingCard;