const Svg = () => {
  const list = new Array(20000).fill('0');
  return (
    <>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
      </svg>
      {list.map((_, index) => (
        <svg key={index} width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
        </svg>
      ))}
    </>
  );
};

export default Svg;
