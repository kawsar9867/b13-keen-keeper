import { Suspense } from "react";
import Card from "./Card";
import Header from "../Header/Header";

const Id = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/profile.json")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);

  const fetchData = fetch("/profile.json")
  .then((res) => res.json());

  return (
    <section>
      <Header />
      <div className="container mx-auto">
        <Suspense>
          <Card fetchDAta={fetchData}> </Card>
        </Suspense>
      </div>
    </section>
  );
};

export default Id;
