
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
   
      <div>
        <Suspense fallback={<span>Loading...</span>}>
     <Card  userPromise={userPromise} ></Card>
        </Suspense>
      </div>
    </div>
    </section>
  );
};

export default Id;
