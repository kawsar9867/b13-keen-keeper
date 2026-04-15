
import { Suspense } from "react";
import Card from "./Card";
import Header from "../Header/Header";

const userPromise = fetch ("/profile.json").then((res) => res.json());

const Id = () => {
 
  return (
    <section>
      <div>
        <Header></Header>
      </div>
    <div className="container mx-auto">
   
      <div className="">
        <Suspense fallback={<span className="loading loading-infinity loading-xl flex justify-center mx-auto "></span>}>
     <Card  userPromise={userPromise} ></Card>
        </Suspense>
      </div>
    </div>
    </section>
  );
};

export default Id;
