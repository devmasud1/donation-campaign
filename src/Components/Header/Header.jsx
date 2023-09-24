import Banner from "./Banner/Banner";

const Header = () => {
  return (
    <div className="relative">
      <div
        className="hero min-h-[60vh] "
        style={{ backgroundImage: "url(https://i.ibb.co/6HR2mcY/bg.png)" }}
      >
        <div className="hero-overlay bg-opacity-95 bg-slate-100"></div>

        <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
