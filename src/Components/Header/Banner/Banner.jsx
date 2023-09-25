const Banner = ({handleSubmit}) => {
  return (
    <div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Search here...."
                  className="outline-none py-1 px-4 text-[#0b0b0b66] font-semibold"
                />
                <input
                  type="submit"
                  value="search"
                  className="bg-[#FF444A] text-white cursor-pointer text-sm px-4 py-2 border-none rounded"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
