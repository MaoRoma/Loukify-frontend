const Section4 = () => {
  const stats = [
    {
      value: "1,200+",
      label: "Active Stores",
    },
    {
      value: "$2.5M+",
      label: "Revenue Generated",
    },
    {
      value: "50,000+",
      label: "Products Sold",
    },
  ];

  return (
    <section
      id="trusted-section"
      className="py-12 sm:py-16 md:py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#DCD9D7] rounded-xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 py-8 sm:py-10 md:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-[#443F3B] px-2">
            Trusted by Cambodian Entrepreneurs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-[#443F3B]">
                  {stat.value}
                </div>
                <div className="text-[#6B6B6B] text-base sm:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
