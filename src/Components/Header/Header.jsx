import Banner from "./Banner/Banner";

const Header = ({handleSubmit}) => {
  return (
    <div className="relative">
      <div
        className="hero min-h-[60vh] "
        style={{ backgroundImage: "url(https://i.ibb.co/Gvj0bvK/bg.png)" }}
      >
        <div className="hero-overlay bg-opacity-95 bg-slate-100"></div>

        <Banner handleSubmit={handleSubmit}></Banner>
      </div>
    </div>
  );
};

export default Header;
