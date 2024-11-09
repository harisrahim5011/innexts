export default function AnimateTest() {
  return (
    <>
      <div>
        <div className="group flex justify-center w-52 h-52 border-2 transform delay-0 hover:rotate-180 duration-[5000ms] hover:shadow-xl hover:translate-x-80  hover:scale-150 ">
          <p className="transform group-hover:translate-y-36 duration-[3000ms] peer">
            hello animate
          </p>
          <p className="group-hover:text-yellow-500 transform duration-[3000ms]">
            sibling
          </p>
        </div>
        <div className="flex justify-center transform duration-1000 hover:translate-x-60 ">
          <p>hello</p>
        </div>

        <div className="h-56 w-56 border-2 transform animate-wiggle"></div>
        <div className="w-full border-2 border-red-300  ">
          <p className="animate-linearX text-cyan-500">linear</p>
          <p className=" animate-linearX text-cyan-500 animation-delay-1000 ">
            linear
          </p>
          <p className="animate-linearX text-cyan-500 animation-delay-2000">
            linear
          </p>
        </div>
      </div>
      {/* the div not including  */}
      <div
        className=" text-red-600 [&>div:nth-child(3)]:border-2
   [&>div:nth-child(3)]:border-red-600 border-2 border-yellow-500 "
      >
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
      </div>

      {/* the div not including  */}

      <div
        className="test mt-11 
    "
      >
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
        <div>
          <h1>title</h1>
          <div>
            <span>hello div</span>
          </div>
          <p>paragraph</p>
        </div>
      </div>
    </>
  );
}
