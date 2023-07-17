import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          borderRadius: "10px",
          background: "#fafafa",
          color: "#333",
        },
      }}
    />
  );
};

export default ToastProvider;
