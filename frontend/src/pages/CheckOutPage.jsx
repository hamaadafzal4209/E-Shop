import { useEffect } from "react"
import CheckOut from "../components/CheckOut/CheckOut"
import CheckOutSteps from "../components/CheckOut/CheckOutSteps"
import Footer from "../components/Footer"
import Header from "../components/Header"

function CheckOutPage() {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div>
        <Header/>
        <CheckOutSteps active={1}/>
        <CheckOut/>
        <Footer/>
    </div>
  )
}

export default CheckOutPage
