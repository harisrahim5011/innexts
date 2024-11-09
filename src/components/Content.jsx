import Card from "./Card";

import img1 from "../../src/assets/financialService/financial.png"; 

// center content with cards
export default function Content() {
  return (

    <div className="flex flex-col items-center ">
    <div className=" flex flex-col items-center flex-wrap  pt-10  bg-blue-400 ">
      <h1 className="text-3xl text-center mb-5 ">
        Financial services that you can trust
      </h1>
      <p className="text-justify w-9/12 mb-28 md:text-center">
        Innex International Trading and Services is among the fastest-growing
        financial consultation companies. Our corporate finance services include
        the application of various industry-leading strategies for financial
        management and growth. Our management finance approach has helped many
        businesses in Qatar experience geometric growth. We have helped many
        businesses in the country achieve sustainable and long-lasting financial
        growth.
      </p>
    </div>
        <div className="   flex flex-row overflow-x-scroll snap-end scroll-smooth md:flex gap-10  md:flex-row md:justify-center md:px-5 w-full -mt-14   ">
          {/* testing purpose only,update later */}
        <Card picture={img1} title={'hello'} para={'para'}></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>

  );
}
