export default function Hero() {
  return (
    <div
      className="w-11/12 md:w-10/12 mx-auto pt-20 md:pt-40 pb-16"
      
    >
      <div className="text-white p-1 m-3">
        <h4 className="text-[16px] md:text-[22px] text-[#D0D5DD] w-full">
          Powerful, Scalable, and Easy-to-Managed Platform
        </h4>
        <h1 className="text-[38px] md:text-[70px] leading-[105%] mt-4 lg:w-3/6">
          Reliable Cloud Solution for SaaS & eCommerce
        </h1>
        <p className="text-[16px] md:text-[20px] leading-[140%] font-normal text-[#FFFFFFB3] mt-9 w-5/6 lg:w-3/6">
          Deploy, scale, and grow — without limits — built to power your next
          big product or online store.
        </p>
        <div className="space-x-5 mt-11 flex">
          <button className="bg-white text-sm md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-[#324351]">
            Get Started Now
          </button>
          <button className="bg-[#303437] text-sm md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-white">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}