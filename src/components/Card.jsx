export default function Card() {
  return (
    <div className="max-w-96 flex flex-col items-center gap-5 border [&>*]:text-center rounded-xl  ">
      <div className="">
        <img className="rounded-xl "
          src="https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg"
          alt="pic"
        />
      </div>
      <h1 className="text-3xl p-2">Financial and Management Consulting</h1>
      <p className="font-bold  p-2">
        As financial and management consultants, we help sanitise everything
        from your corporate governance to all financial transactions.
      </p>
      <button className="bg-sky-500 p-2 rounded-lg font-bold ">see more +</button>
    </div>
  );
}
