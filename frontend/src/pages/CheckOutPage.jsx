import CheckOut from "../components/CheckOut/CheckOut";
import CheckOutSteps from "../components/CheckOut/CheckOutSteps";
import Header from "../components/Header";

function CheckOutPage() {
  return (
    <div>
      <Header />
      <CheckOutSteps active={1} />
      <CheckOut />
    </div>
  );
}

export default CheckOutPage;
