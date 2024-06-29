import Image from "./Image";

const LoadingSreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="gap-2 flex-center">
        <Image
          src={require("assets/images/logo.png")}
          className="flex-shrink-0 w-[50px] h-13 object-contain"
        />

        <span className="text-2xl text-[#e20202] font-bold tracking-wider transition-base group-hover:opacity-100">
          LASMOV
        </span>
      </div>
      <span className="loading loading-spinner text-info" />
    </div>
  );
};

export default LoadingSreen;
