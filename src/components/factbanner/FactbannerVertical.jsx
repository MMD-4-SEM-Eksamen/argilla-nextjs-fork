const FactbannerVertical = () => {
  return (
    <div className="bg-secondary flex max-w-[320px] items-center justify-center py-8">
      <div className={`flex max-w-421 flex-col gap-16 px-4`}>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-primary font-serif text-6xl">25+</h2>
          <p className="text-xl">År med erfaring i enterprise-systemer</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-primary font-serif text-6xl">30%</h2>
          <p className="text-xl">
            Gennemsnitlig reduktion i manuelle arbejdsgange
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-primary font-serif text-6xl">25+</h2>
          <p className="text-xl">Nedetid på managed løsninger i 2026</p>
        </div>
      </div>
    </div>
  );
};

export default FactbannerVertical;
