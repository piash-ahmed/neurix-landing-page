import { BsArrowRight } from "react-icons/bs";

export default function FAQSection() {
  return (
    <section className="w-10/12 mx-auto pt-16 pb-10 md:pt-32 md:pb-20 flex flex-col lg:flex-row">
      <div className="lg:w-[50%] mb-10 md:mb-16">
        <h4 className="text-[#D0D5DD] text-lg md:text-xl mb-2">FAQ</h4>
        <h1 className="text-white text-[30px] md:text-[38px] lg:text-[50px] mb-3 md:mb-4 leading-[115%]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#FFFFFFB3] text-lg md:text-xl mb-6 lg:mb-10 w-11/12 md:pr-16">
          Whether you're launching a personal blog, scaling your startup, or
          running a high-traffic eCommerce site—Neurix has the infrastructure
          and support to back your vision.
        </p>
        <a
          href=""
          className="bg-[#FFFFFF29] text-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full flex items-center justify-center gap-1 md:gap-2 w-48 md:w-70 mt-10"
        >
          Visit KnowledgeBase
          <BsArrowRight className="text-base md:text-lg" />
        </a>
      </div>

      <div className="text-white lg:w-[50%]">

        <div className="collapse collapse-plus bg-transparent border border-gray-900 mb-5"
        style={{
            background: "linear-gradient(to bottom, #0c0d12, #151619)",
          }}
        >
          <input type="radio" name="my-accordion-3"/>
          <div className="collapse-title text-[#F2F4F7] text-lg md:text-xl">
            What types of hosting do you offer?
          </div>
          <div className="collapse-content text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10">
            Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.
          </div>
        </div>

        <div className="collapse collapse-plus bg-transparent border border-gray-900 mb-5"
        style={{
            background: "linear-gradient(to bottom, #0c0d12, #151619)",
          }}
        >
          <input type="radio" name="my-accordion-3" defaultChecked/>
          <div className="collapse-title text-[#F2F4F7] text-lg md:text-xl">
            Do you offer free SSL certificates?
          </div>
          <div className="collapse-content text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10">
            Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.
          </div>
        </div>

        <div className="collapse collapse-plus bg-transparent border border-gray-900 mb-5"
        style={{
            background: "linear-gradient(to bottom, #0c0d12, #151619)",
          }}
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[#F2F4F7] text-lg md:text-xl">
            Can I migrate my website to Neurix?
          </div>
          <div className="collapse-content text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10">
            Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.
          </div>
        </div>

        <div className="collapse collapse-plus bg-transparent border border-gray-900 mb-5"
        style={{
            background: "linear-gradient(to bottom, #0c0d12, #151619)",
          }}
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[#F2F4F7] text-lg md:text-xl">
            Where are your data centers located?
          </div>
          <div className="collapse-content text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10">
            Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.
          </div>
        </div>

        <div className="collapse collapse-plus bg-transparent border border-gray-900 mb-5"
        style={{
            background: "linear-gradient(to bottom, #0c0d12, #151619)",
          }}
        >
          <input type="radio" name="my-accordion-3" className="h-10 w-10" />
          <div className="collapse-title text-[#F2F4F7] text-lg md:text-xl">
            Is there a money-back guarantee?
          </div>
          <div className="collapse-content text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10">
            Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.
          </div>
        </div>

      </div>
    </section>
  );
}
