import NavFinal from "../components/NavFinal";
import Footer from "../components/Footer";

export default function ContactUs(params) {
  return (
    <div>
      {/* navbar */}
      <NavFinal></NavFinal>
      {/* navbar */}
      {/* about contact */}
      <div className=" pb-10 flex flex-col items-center bg-sky-400">
        <h1 className="mt-5 ">Contact</h1>
        <p className="w-[60%] text-justify">
          At Innex International Trading and Services we make businesses achieve
          optimal growth and expansion within such a short time. With many
          successful businesses haven tried our solutions, many more are in
          search of that Midas touch. From business management to investing in
          Qatar, we help you with a wide range of solutions including
          immigration, passport, and visa services.
        </p>
      </div>
      {/* about contact */}
      {/* get in touch */}
      <div className=" my-5 [&>*]:my-10 ">
        <h1>Get in Touch</h1>
        <p className="md:w-[50%] text-justify">
          We are always available through our website .In addition, You can also
          drop as a note at our Email Address.
        </p>
      </div>
      {/* get in touch */}
      {/* form & contact-info */}
      <div className="border-2 grid grid-cols-2 grid-rows-2 gap-20 ">
        {/* left side */}

        <div>
          <h1>Send Us a Message</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" grid [&>input]:my-7 [&>input]:mx-4 [&>input]:p-5 [&>input]:rounded-md"
          >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="example@mail.com" />
            <input type="text" placeholder="Subject" />
            <input type="tel" placeholder="Phone " />
            <input type="textarea" placeholder="message" />
            {/* <input type="submit" value="Submit" /> */}
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* left side */}
        {/* contact type */}
        <div className="">
          <h1>Contact Info</h1>
          <div className="grid col-span-2">
            {/* left side */}
            <div>left</div>
            {/* left side */}

            {/* right-side */}
            <div>right</div>
            {/* right-side */}
          </div>
        </div>
        {/* contact type */}
      </div>
      {/* form & contact-info */}
      {/* footer */}
      <Footer></Footer>
      {/* footer */}
    </div>
  );
}
