const CommunityCard = ({ bg, svg, color }) => {
  return (
    <div className='card' style={{ backgroundColor: bg }}>
      <img src={svg} alt="icon" style={{ filter: "none", fill: color }} />
    </div>
  );
};

export default CommunityCard;