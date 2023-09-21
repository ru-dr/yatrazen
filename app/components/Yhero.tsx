export default function Yhero() {
  return (
    <div className="hero flex flex-col bg-[#beffc5] h-auto w-full justify-center rounded-2xl">
      <div className="my-5 py-10">
        <div className="flex w-8/12 justify-around items-center mx-auto my-4">
          <div className="hidden xs:block xs:w-3/12 xs:h-6 sm:block sm:w-4/12 sm:h-10 md:w-6/12 md:h-12 lg:w-6/12 lg:h-16 xl:w-5/12 xl:h-16  xxl:w-6/12">
            <img
              src="https://images.pexels.com/photos/17636489/pexels-photo-17636489/free-photo-of-man-in-hat-and-with-backpack-standing-with-hills-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="st-text text-left flex justify-center font-semibold text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            Make your journey
          </p>
        </div>
        <div className="flex w-8/12 justify-around items-center mx-auto my-4">
          <p className="st-text text-left flex justify-center font-semibold text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            unforgettable and safe
          </p>
          <div className="hidden sm:block sm:w-4/12 sm:h-10 md:w-4/12 md:h-12 lg:w-5/12 lg:h-16 xl:w-3/12 xl:h-16 xxl:w-5/12">
            <img
              src="https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex max-sm:flex-row-reverse sm:flex-row-reverse w-8/12 justify-around items-center mx-auto my-4">
          <p className="st-text text-left flex justify-center font-semibold text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            with us
          </p>
          <div className="hidden max-sm:block max-sm:h-6 max-sm:w-8/12 sm:block sm:w-4/12 sm:h-10 md:w-9/12 md:h-12 lg:w-9/12 lg:h-16 xl:w-9/12 xl:h-16">
            <img
              src="https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
