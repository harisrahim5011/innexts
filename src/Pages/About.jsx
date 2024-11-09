import NavFinal from "../components/NavFinal";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      {/* navbar */}
      <NavFinal></NavFinal>
      {/* about us paragraph */}
      <div className=" pb-10 flex flex-col items-center bg-sky-400">
        <h1 className="mt-5 ">About Us</h1>
        <p className="w-[60%] text-justify">
          Innex International Trading and Services is a Qatar-based business
          management and development company that specialises in helping
          businesses expand. We are a Qatar-based company that helps businesses
          settle in the country and achieve sustained growth. With several years
          of experience working in this territory, we have a wide network of key
          industry stakeholders across various business segments
        </p>
      </div>
      {/* about us paragraph */}
      {/* what we do */}
      <div className=" my-5 [&>*]:my-10 ">
        <h1>What We Do</h1>
        <p className="md:w-[50%] text-justify">
          As a leading business management company in Qatar, we help businesses
          settle and achieve accelerated business growth. Our business
          development management services help new companies in the region
          achieve fast market traction. As a branding organization, we also help
          businesses create and maintain their corporate identities within the
          marketplace.
        </p>
        {/* div card container */}
        <div className="grid grid-flow-row gap-5 items-center md:justify-center md:grid-flow-col [&>div]:h-full">
          {/* cards */}
          <div className="max-w-96 flex flex-col items-center gap-5 border [&>*]:text-center rounded-xl  ">
            <h1 className="text-3xl p-2">People driven by passion</h1>
            <p className="font-bold  p-2">
              When it comes to sustained business growth, you need the best
              human resources to achieve this. We have a team of business
              experts whose combined industry experience span decades. With our
              team, you are getting only the best business services to trigger
              accelerated growth and maximum revenue. We have experts that are
              knowledgeable and proficient about various marketplaces and key
              industry trends. Their knowledge and professional experience serve
              as key inputs in helping all our clients succeed in their various
              business segments.
            </p>
            {/* <button className="bg-sky-500 p-2 rounded-lg font-bold ">
              see more +
            </button> */}
          </div>
          {/* cards */}
          <div className="max-w-96 flex flex-col items-center gap-5 border [&>*]:text-center rounded-xl  ">
            <h1 className="text-3xl p-2">
              21st-century technology for instant results
            </h1>
            <p className="font-bold  p-2">
              We are a leading financial consultation services company that has
              deployed the best technology to oversee our processes. With a
              larger digital footprint, we can cater to a growing list of
              clients looking to take advantage of the profitable and successful
              Qatari marketplace. We have streamlined our operations to ensure
              that all our clients achieve instant success in their various
              sectors. Our technology is driven by a state-of-the-art
              information technology network infrastructure. Our business
              support services includes marketing, structuring, business merger
              services, acquisition support, and so on. We also offer
              immigration services such as visa support, passport services, and
              so on.
            </p>
            {/* <button className="bg-sky-500 p-2 rounded-lg font-bold ">
              see more +
            </button> */}
          </div>
          {/* cards */}
          <div className="max-w-96 flex flex-col items-center gap-5 border [&>*]:text-center rounded-xl  ">
            <h1 className="text-3xl p-2">Processes you can trust</h1>
            <p className="font-bold  p-2">
              Innex International Trading and Services company is an
              organisation that boasts of the most efficient processes for
              accelerated productivity and growth. With our services, clients
              are not only guaranteed increased productivity but sustainable
              growth. Financial management is at the core of our processes. We
              manage your finances to create profits from a plentitude of
              investment opportunities.
            </p>
            {/* <button className="bg-sky-500 p-2 rounded-lg font-bold ">
              see more +
            </button> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
