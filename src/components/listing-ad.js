import SliderImage from '../components/slider-image'

export default function ListingAd({ url }) {

  const handleShowDescription = () => {
    console.log('SHOW DESC')
  }

  return (
    <div className="flex flex-col shadow-md xs:w-100 sm:w-100 md:w-96 rounded-md">
       <SliderImage/>
      <div className="flex flex-col md:flex-rowf flex-wrap p-4">
        <div className="flex">
          <img
            className="mr-2"
            width="40px"
            height="40px"
            src="https://via.placeholder.com/40"
            alt="Placeholder"
            />
          <div className="flex flex-col">
            <h1 className="font-medium text-xl text-slate-700">title</h1>
            <p className="font-light text-sm text-slate-400">address</p>
          </div>
        </div>
       <div className="flex flex-col ml-auto">
       <p className="font-medium text-md text-right">$2,609 - $3,043 psf</p>
        <p className="font-light text-sm text-right text-slate-400">Prices from $1.99M</p>
       </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex-auto">
          <p className="font-light text-sm text-slate-500">
            Condo · 2021 · Freehold
          </p>
          <p className="font-light text-sm text-slate-500">231 units · 1, 2, 3, 4 bedrooms</p>
        </div>
        <button
          className="text-sm text-blue-600 font-medium ml-auto"
          onClick={() => handleShowDescription()}
        >See description</button>
      </div>
    </div>
  );
}
