const SectionHeader = ({ title, description }) => {
  return (
    <div className="my-10">
      <h2 className="text-3xl text-center font-bold my-5">{title}</h2>
      <p className="text-center w-1/2 mx-auto text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
