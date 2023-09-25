import Swal from "sweetalert2";
const CategoryCard = ({ category }) => {
  const { id, title, picture, text_button_bg_color, price, description } =
    category || {};

  const handleAddToLocalStorage = () => {
    const addedDonationArray = [];

    const donationCart = JSON.parse(localStorage.getItem("donation"));

    if (!donationCart) {
      addedDonationArray.push(category);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      Swal.fire("Your donation has been complete");
    } else {
      const alreadyDonate = donationCart.find((item) => item.id === id);

      if (!alreadyDonate) {
        addedDonationArray.push(...donationCart, category);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        Swal.fire("Your donation has been complete");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already donate!",
        });
      }
    }
  };

  const bgStyle = {
    borderRadius: "8px",
    backgroundImage: `url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
  };

  const btnStyle = {
    background: text_button_bg_color,
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative" style={bgStyle}>
        <div className="bg-[#0b0b0b80] h-24 absolute left-0 right-0 bottom-0">
          <button
            onClick={handleAddToLocalStorage}
            className="py-2 px-4 m-8  text-white"
            style={btnStyle}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold my-6">{title}</h2>
        <p className="text-[#0b0b0bb3]">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
