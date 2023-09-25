import { useNavigate } from "react-router-dom";

const DonationCard = ({ data }) => {
  const {
    id,
    title,
    picture,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
    price,
    category,
  } = data || {};

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/category/${id}`);
  };

  const cardStyle = {
    backgroundColor: card_bg_color,
  };

  const categoryBtnStyle = {
    backgroundColor: category_bg_color,
    color: text_button_bg_color,
  };

  const priceStyle = {
    color: text_button_bg_color,
  };
  const viewBtnStyle = {
    backgroundColor: text_button_bg_color,
  };
  return (
    <div
      className="flex w-full flex-col lg:flex-row items-center gap-10  mx-auto"
      style={cardStyle}
    >
      <div className="w-full lg:w-[30%] h-full">
        <img src={picture} alt={title} className="rounded-tl-8 object-cover w-full h-[100%]" />
      </div>
      <div className="py-5 px-4 lg:px-0 md:py-5 w-full lg:w-[70%]">
        <button style={categoryBtnStyle} className="px-2 md:px-4 py-1">
          {category}
        </button>
        <h2 className="md:text-2xl font-semibold my-2">{title}</h2>
        <h4 className="font-semibold mb-2" style={priceStyle}>
          ${price}
        </h4>
        <button
          onClick={handleViewDetails}
          style={viewBtnStyle}
          className="text-white px-2 py-1 md:px-4 md:py-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
