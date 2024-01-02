import LogIn from "@/app/components/LogIn";
import SignUp from "@/app/components/SignUp";
import Wait from "@/app/components/Wait";
import Currency from "@/app/components/Currency";
import Balance from "@/app/components/Balance";
import Finish from "@/app/components/Finish";
import Dashboard from "@/app/components/Dashboard";
export default function Home() {
  return (
    <main className=" w-screen-full h-screen-full">
      {/* <LogIn />
      <SignUp />
      <Wait />
      <Currency />
      <Balance />
      <Finish /> */}
      <Dashboard />
    </main>
  );
}
