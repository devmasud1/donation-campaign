const CategoryCard = ({ category }) => {
  const {
    id,
    title,
    picture,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
    price,
    description,
  } = category || {};
  // category,
  console.log(category);

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
          <button className="py-2 px-4 m-8  text-white" style={btnStyle}>
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
