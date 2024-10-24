export default function JoinNewsLater() {
  return (
    <div className="flex  justify-around gap-5 md:gap-10 items-center">
      <div className="" >
        <h1> Join Our Newsletter</h1>
        <p>We share guides and tips on growing & managing your business.</p>
      </div>
      <div className=""> 
        <form onSubmit={(e)=>{ e.preventDefault()}} className="flex flex-col md:flex-row gap-10">
          <input type="text" placeholder="Your Email Address" className="rounded-lg md:max-w-60 focus:outline-none"/>
          <button type="submit" className="md:max-w-60" >SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}