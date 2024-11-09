export default function Carousel() {
  return (
    <>
      {/* below div for testing purpose only */}
      {/* <div className=" border-red-400 h-2 max-w-6xl"></div>  */}
      <div className=" h-[85vh] items-center justify-center hidden md:flex">
        <div className="mx-auto h-full ">
          <div className=" h-full flex  [&>div]:flex-shrink  justify-center [&:hover>div]:w-28 [&>div:hover]:w-[50rem] [&>div]:rounded-lg gap-1 ">
            <div className="group relative  h-full w-[50rem]  cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg"
                alt=""
              />
              <div className=" absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around items-center inset-x-5 bottom-40   text-white">
                  <button>Visit Services</button>
                  <h2>Financial Service</h2>
                </div>
              </div>
            </div>
            <div className="group relative h-full w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843_960_720.jpg"
                alt=""
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around inset-x-5 bottom-40 items-center  text-white">
                  <button>Visit Services</button>
                  <h2>Discover your next Profitable Investment</h2>
                </div>
              </div>
            </div>
            <div className="group relative h-full w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg"
                alt=""
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around inset-x-5 bottom-40  items-center text-white">
                  <button>Visit Services</button>
                  <h2>Food & Beverages</h2>
                </div>
              </div>
            </div>
            <div className="group relative h-full w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg"
                alt=" test"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around inset-x-5 bottom-40 items-center  text-white">
                  <button>Visit Services</button>
                  <h2>Shading made with Passion & Innovation</h2>
                </div>
              </div>
            </div>
            <div className="group relative h-full w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg"
                alt=" test"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around inset-x-5 bottom-40 items-center  text-white">
                  <button>Visit Services</button>
                  <h2>Oil & Gas</h2>
                </div>
              </div>
            </div>
            <div className="group relative h-full w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
              <img
                className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-150"
                src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg"
                alt=" test"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className="absolute flex justify-around inset-x-5 bottom-40 items-center  text-white">
                  <button>Visit Services</button>
                  <h2>Information Technology</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
