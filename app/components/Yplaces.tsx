import YplaceCard from "./YplaceCard";

function Yplaces() {
  return (
    <div>
      <p className="my-2 text-center text-xl sm:text-4xl md:text-5xl font-extrabold">
        Explore the beauty of India
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
        <YplaceCard />
      </div>
    </div>
  );
}

export default Yplaces;
