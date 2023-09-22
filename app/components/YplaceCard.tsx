function YplaceCard() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative m-2">
      <img
        className="img-1 rounded-xl"
        src="https://images.unsplash.com/photo-1602828889956-45ec6cee6758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="text absolute top-2 left-2 bg-slate-800 text-white px-2 py-1 rounded-full">
        New-York, America.
      </div>
    </div>
  );
}

export default YplaceCard;
