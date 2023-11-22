import shopimg from '../../../.././assets/home/banner.jpg'
const Dasuui = () => {
  return (
    <div>
      <div
        className="hero min-h-screen w-[1300px] h-[600px] mb-36"
      >
        <img className='w-[1270px]' src={shopimg} alt="" />
        <div className="hero-overlay bg-opacity-60 w-[800px] h-[250px] bg-stone-300"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-black">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasuui;
