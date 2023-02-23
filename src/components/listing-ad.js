import {useState} from 'react'
import SliderImage from '../components/slider-image'
import PhoneNumber from './phone-number'

export default function ListingAd({ url }) {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div className="flex flex-col shadow-md xs:w-100 sm:w-100 md:w-96 rounded-md">
       <SliderImage/>
      <div className="flex flex-col md:flex-row flex-wrap p-4">
        <div className="flex">
          <img
            className="mr-2"
            width="40px"
            height="40px"
            src="https://via.placeholder.com/40"
            alt="Placeholder"
            />
          <div className="flex flex-col">
            <h1 className="font-medium text-sm text-slate-700">Forett At Bukit Timah</h1>
            <p className="font-light text-xs text-slate-400">70 Anchorvale Crescent · D21</p>
          </div>
        </div>
       <div className="flex flex-col ml-auto">
       <p className="font-medium text-sm text-right">$2,609 - $3,043 psf</p>
        <p className="font-light text-xs text-right text-slate-400">Prices from $1.99M</p>
       </div>
      </div>
      <div className="flex flex-col p-4">
        <div className={`flex-auto overflow-hidden ${showDescription ? 'h-10': 'h-100'}`}>
          <p className="font-light text-sm text-slate-500">
            Condo · 2021 · Freehold
          </p>
          <p className="font-light text-sm text-slate-500">231 units · 1, 2, 3, 4 bedrooms</p>
          <p className="font-light text-sm text-slate-500 mt-4">Phone Number: <PhoneNumber/> </p>
        </div>
        <button
          className="text-sm text-blue-600 font-small ml-auto mt-4"
          onClick={() => handleShowDescription()}
        >{showDescription ? 'See description' : 'Hide'}</button>
      </div>
    </div>
  );
}
