import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

function SellerActivation() {
  const { activation_token } = useParams();
  const { error, setError } = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/shop/seller/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };
      activationEmail();
    }
}, []);

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      {error ? (
        <p className="text-xl">Your token is expired</p>
      ) : (
        <p className="text-xl">Your shop account is created succesfully</p>
      )}
    </div>
  );
}

export default SellerActivation;