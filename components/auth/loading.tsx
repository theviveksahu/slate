import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Image
        src="/logo.svg"
        alt="logo"
        height={100}
        width={100}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
