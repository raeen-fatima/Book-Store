import toast from "react-hot-toast";
import { RAZORPAY_KEY_ID } from "../utils/config";

export const initiatePayment = (item) => {
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: item.price * 100,
    currency: "INR",
    name: item.name,
    description: item.title,
    handler: function (response) {
      toast.success("Payment Successful! Starting download...");
      window.open(item.pdf, "_blank");
    },
    prefill: {
      name: "Your User",
      email: "user@example.com",
    },
    theme: {
      color: "#F37254",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};
