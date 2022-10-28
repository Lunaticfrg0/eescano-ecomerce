const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "womens",
    },
    {
      id: 5,
      title: "Mans",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          <div className="backgroud-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Here</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
