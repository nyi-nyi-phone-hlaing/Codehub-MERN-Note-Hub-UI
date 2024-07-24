import { Bounce, toast } from "react-toastify";

const config = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

export const toastInfo = (content) => {
  toast.info(content, config);
};

export const toastSuccess = (content) => {
  toast.success(content, config);
};

export const toastWarn = (content) => {
  toast.warn(content, config);
};

export const toastError = (content) => {
  toast.error(content, config);
};
