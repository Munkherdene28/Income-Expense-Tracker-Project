import LogIn from "@/app/LogIn/page";
import Wait from "@/app/components/Wait";
import Currency from "@/app/Currency/page";
import Balance from "@/app/Balance/page";
import Finish from "@/app/Finish/page";
import One from "@/app/One.js";
import Record from "../app/Records/Record";
export default function Home() {
  return (
    <main className=" w-screen-full h-screen-full">
      {/* <LogIn />
      <Wait />
      <Currency />
      <Balance />
      <Finish /> */}
      {/* <One /> */}
      <Record />
    </main>
  );
}
