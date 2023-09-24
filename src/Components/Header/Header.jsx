import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0">
        <NavBar></NavBar>
      </div>
      <div
        className="hero min-h-[70vh] "
        style={{ backgroundImage: "url(https://i.ibb.co/6HR2mcY/bg.png)" }}
      >
        <div className="hero-overlay bg-opacity-95 bg-slate-100"></div>

        <Banner></Banner>

        {/* <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <div>
              <div>
                <form>
                  <input type="text" name="name" placeholder="Search here...." 
                  className="outline-none py-1 px-4 text-[#0b0b0b66] "
                  />
                  <input
                    type="submit"
                    value="search"
                    className="bg-[#FF444A] cursor-pointer text-sm px-4 py-2 border-none rounded"
                  />
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;

//https://i.ibb.co/6HR2mcY/bg.png
// {
//   /* <NavBar></NavBar>
//             <Banner></Banner> */
// }
