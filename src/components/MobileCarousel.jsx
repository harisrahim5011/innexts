import { useState } from "react";

const imagesArray = [
  "https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg",
];

export default function MobileCarousel() {
  const [index, setIndex] = useState(0);
  console.log(index);

  function handleForward() {
    if (index < imagesArray.length - 1) {
      setIndex(index + 1);
    }

    //go back to 0 index on forward click
    // else{
    //     setIndex(0)
    // }
  }
  function handleReverse() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="md:hidden overflow-hidden shadow-2xl mb-2 rounded-lg">
      <div className="relative border ">
        <img src={imagesArray[index]} alt="pic" className="w-full " />
        <div className="absolute top-[35%] [&>*]:bg-transparent [&>*]:text-5xl [&>*]:text-slate-300 w-full  flex justify-between [&>*]:shadow-xl">
          <button onClick={handleReverse}>{"<"}</button>
          <button onClick={handleForward}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
