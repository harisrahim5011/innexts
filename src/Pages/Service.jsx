import NavFinal from "../components/NavFinal";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <div>
      {/* navbar */}
      <NavFinal></NavFinal>
      {/* navbar */}
      {/* about service */}
      <div className=" pb-10 flex flex-col items-center bg-sky-400">
        <h1 className="mt-5 ">Services</h1>
        <p className="w-[60%] text-justify">
          Innex International Trading and Services Company is a Qatar-based
          business management company that provides a wide range of consultation
          services for a growing list of clientele. We have a portfolio of
          innovative services that are strategically designed to reposition any
          business for sustained profitability. Our services cut across various
          business segments and are suitable for all brands, organisations, and
          businesses.
        </p>
      </div>
      {/* about service */}
      {/* some of our services */}
      {/* what we do */}
      <div className=" my-5 [&>*]:my-10 ">
        <h1>Our Services</h1>
        <p className="md:w-[50%] text-justify">
          Innex International Trading and Services Company is a Qatar-based
          business management company that provides a wide range of consultation
          services for a growing list of clientele. We have a portfolio of
          innovative services that are strategically designed to reposition any
          business for sustained profitability. Our services cut across various
          business segments and are suitable for all brands, organisations, and
          businesses
        </p>
        {/* div card container */}
        <div className="grid grid-flow-row gap-5 items-center md:justify-center  md:grid-cols-4 [&>div]:h-full">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        {/* div card container */}
      </div>
      {/* some of our services */}
      {/* footer */}
      <Footer></Footer>
      {/* footer */}
    </div>
  );
}
