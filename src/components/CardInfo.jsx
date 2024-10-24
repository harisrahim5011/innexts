

// card containing image and text aside, it comes after card-container

export default function CardInfo() {
  return (
    <div className=" flex flex-col md:flex-row   my-14 items-center gap-5 md:justify-evenly">
      <div className=" flex flex-col gap-5 [&>*]:text-center  max-w-96   ">
        <h1>We grow your business with our proven expertise</h1>
        <p>
          We are a Qatar-based financial consultation company that focuses on
          business growth and expansion. Over the years, we have helped many
          businesses settle in Qatar and helped them grow over the years. We
          also handle immigration, visa, and passport issues.
        </p>
      </div>
      <div className="w-80 ">
        <img className=" w-full"
          src="https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg"
          alt="pic"
        />
      </div>
    </div>
  );
}
