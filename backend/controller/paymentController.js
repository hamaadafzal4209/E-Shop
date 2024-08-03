import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Stripe from "stripe";
import ErrorHandler from "../utils/ErrorHandler.js";

const stripe = new Stripe(
  "sk_test_51Pc6H6JvBGOIHYX6E7TrQBZahracgr1gvrexjDJDJBqxy6pnqvI0W0szJIYgga0qCnbRuSDily0ZTtZeQ3XhT2nS00wThAKXSS"
);

export const processPayment = catchAsyncErrors(async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "USD",
      metadata: {
        company: "eshop",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const stripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
