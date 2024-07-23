import { Blocks } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='w-full h-full grid place-items-center overflow-hidden'>
      <Blocks width={50} height={50} color='white' />
    </div>
  );
};

export default Loading;
