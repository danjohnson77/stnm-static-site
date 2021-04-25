const Arrow = ({ direction, onClick }) => {
  return (
    <div
      className="flex items-center p-5 cursor-pointer"
      onClick={(direction) => onClick(direction)}
    >
      <i className={`fas fa-angle-${direction}`}></i>
    </div>
  );
};

export default Arrow;
