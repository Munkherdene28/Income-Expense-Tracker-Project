import LogIn from "@/app/LogIn/page";
import Wait from "@/app/components/Wait";
import Currency from "@/app/components/Currency";
import Balance from "@/app/components/Balance";
import Finish from "@/app/components/Finish";
export default function Home() {
  return (
    <main className=" w-screen-full h-screen-full">
      <LogIn />
      {/* <Wait />
      <Currency />
      <Balance />
      <Finish /> */}
    </main>
  );
}
