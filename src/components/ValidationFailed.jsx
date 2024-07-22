import { ErrorMessage } from "formik";

const ValidationFailed = ({ name }) => {
  return (
    <div className='text-red-500 text-sm italic mt-1'>
      <ErrorMessage name={name} />
    </div>
  );
};

export default ValidationFailed;
