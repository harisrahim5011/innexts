import { carouselImage } from "../Utilitities/Utility";

export default function Carousel(params) {
  return (
    <div className="border-4 flex h-96 justify-center">
      <Images images={carouselImage}></Images>
    </div>
  );
}

function Images({ images }) {
  let imageItems;
  console.log(imageItems);
  imageItems = images.map((value, index) => {
    return (
      <div key={index} className=" border-4 overflow-hidden w-40 h-40 m-10">
        <img src={value} alt="image" className="w-full h-full object-cover" />
      </div>
    );
  });
  return <>{imageItems}</>;
}
