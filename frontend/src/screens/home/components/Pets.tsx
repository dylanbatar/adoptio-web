import { useEffect } from "react";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { Loading } from "../../../components/loading";
import { usePetStore } from "../../../store/petStore";

export const Pets = () => {
  const { getPets, pets } = usePetStore();

  useEffect(() => {
    getPets().then();
  }, []);

  return (
    <section className="bg-orange-50 py-20">
      <h2 className="text-center font-medium text-5xl pt-5 text-indigo-900  animate__animated animate__fadeInUp">
        Looking For Foster
      </h2>
      <h2 className="text-center font-medium text-5xl p-0 mb-10 text-indigo-900 animate__animated animate__fadeInUp">
        Homes
      </h2>
      <div className="flex justify-center mb-5">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
          {pets.length &&
            pets.map((pet) => (
              <Card
                key={pet.id}
                id={pet.id}
                name={pet.name}
                image={`${process.env.PUBLIC_URL}/assets/${pet.imageFileName}`}
              />
            ))}
        </div>
        <Loading show={pets.length === 0} />
      </div>
      <div className="flex justify-center py-10">
        <Button title="Explore more" />
      </div>
    </section>
  );
};
