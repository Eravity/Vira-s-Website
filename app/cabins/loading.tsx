import Spinner from "../_components/Spinner";

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
};

export default Loading;
