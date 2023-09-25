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

  const navigate = useNavigate()

  const handleViewDetails = () =>{

    navigate (`/category/${id}`)

  }

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
    <div className="flex  items-center  gap-10" style={cardStyle}>
      <div className="rounded-tl-8">
        <img src={picture} alt={title} className="rounded-tl-8" />
      </div>
      <div>
        <button style={categoryBtnStyle} className="px-4 py-1">
          {category}
        </button>
        <h2 className="text-2xl font-semibold my-2">{title}</h2>
        <h4 className="font-semibold mb-2" style={priceStyle}>
          ${price}
        </h4>
        <button onClick={handleViewDetails} style={viewBtnStyle} className="text-white px-4 py-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
