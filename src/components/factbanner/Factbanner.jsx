"use client";

const Factbanner = () => {
  return (
    <div className="bg-secondary flex w-full items-center justify-center py-16">
      <div
        className={`flex max-w-421 flex-col gap-16 px-4 md:flex-row md:gap-8`}
      >
        <div className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-left">
          <h2 className="text-primary font-serif text-6xl">25+</h2>
          <p className="text-xl">År med erfaring i enterprise-systemer</p>
        </div>
        <div className="flex flex-col items-center text-center md:hidden md:flex-row md:gap-4 md:text-left lg:flex">
          <h2 className="text-primary font-serif text-6xl">200+</h2>
          <p className="text-xl">Konfigurerede moduler på tværs af brancher</p>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-left">
          <h2 className="text-primary font-serif text-6xl">30%</h2>
          <p className="text-xl">
            Gennemsnitlig reduktion i manuelle arbejdsgange
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-left">
          <h2 className="text-primary font-serif text-6xl">25+</h2>
          <p className="text-xl">Nedetid på managed løsninger i 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Factbanner;
