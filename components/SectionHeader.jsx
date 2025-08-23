const SectionHeader = ({ title, description }) => {
  return (
    <div className="my-6 sm:my-8 md:my-10 lg:my-12 px-4 sm:px-6 md:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
        {title}
      </h2>
      <p className="text-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;