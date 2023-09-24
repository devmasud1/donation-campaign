import { Link } from "react-router-dom";

const AllCategoriesCard = ({ data }) => {
  const {
    id,
    title,
    picture,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = data || {};

  const cardStyle = {
    backgroundColor: card_bg_color,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    color: text_button_bg_color,
  };

  const btnStyle = {
    backgroundColor: category_bg_color,
  };

  return (
    <Link to={`/category/${id}`}>
      <div
        className="relative flex  flex-col rounded-xl bg-clip-border shadow-md"
        style={cardStyle}
      >
        <div className="relative overflow-hidden rounded-t-lg bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={picture}
            alt="img-blur-shadow"
            layout="fill"
            className="w-full"
          />
        </div>
        <div className="p-6" style={titleStyle}>
          <button className="py-1 px-2 mb-2" style={btnStyle}>
            {category}
          </button>
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default AllCategoriesCard;
