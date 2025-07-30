export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #17202c, #081015)",
      }}
    >
      <section className="md:w-10/12 mx-auto footer sm:footer-horizontal text-white p-10 font-light">
        <aside>
          <img src="/main-logo.png" alt="" />
          <p className=" text-[#FFFFFFB8] text-sm lg:text-base mt-3">
            Neurix is the powerful cloud platform <br /> for ambitious eCommerce
            brands and <br /> SaaS startups — fast to deploy, easy <br /> to
            manage, and ready to scale.
          </p>
          <div className="flex gap-2 mt-8 md:mt-10">
            <a href=""><img className="h-10 w-10" src="/tiktok.png" alt="" /></a>
            <a href=""><img className="h-10 w-10" src="/facebook.png" alt="" /></a>
            <a href=""><img className="h-10 w-10" src="/instagram.png" alt="" /></a>
            <a href=""><img className="h-10 w-10" src="/discord.png" alt="" /></a>
          </div>
        </aside>

        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Our Products
          </h6>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">Domains</a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Cloud Services
          </a>
        </nav>
        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Company
          </h6>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">About</a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">Contact us</a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">Why Neurix</a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">Blog</a>
        </nav>
        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Legal
          </h6>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Refund Policye
          </a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Affiliate Terms
          </a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Cookie Policy
          </a>
        </nav>
        <nav>
          <h6 className=" mb-1 md:mb-4text-[#FFFFFFE0] text-lg capitalize font-normal md:mb-4">
            Office Address
          </h6>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Registered Address: 40 Penarth Road,
            <br />
            Cardiff, Wales, CF10 5GP, United Kingdom.
          </a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Company Number (UK): 15189998
          </a>
          <a className="bg-[#FFFFFF29] text-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full flex items-center justify-center gap-1 md:gap-2 w-48 md:w-70 mt-8 cursor-pointer">
            <img src="/chat.png" alt="" />
            Chat with Massenger
          </a>
        </nav>
      </section>

      <div className="border-t-1 border-[#171e23]">
        <div className="md:w-10/12 mx-auto text-white flex flex-col lg:flex-row items-center justify-between gap-4 p-6">
          <p className="text-sm text-white font-light">
            <span className="text-[#939EA7]">
              © 2025 Neurix. All rights reserved
            </span>{" "}
            | Powered by Nextup Global Ltd
          </p>
          <div>
            <img src="pay-with.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
