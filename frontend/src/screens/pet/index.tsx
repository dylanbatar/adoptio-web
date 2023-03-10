import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { usePetStore } from "../../store/petStore";

export const PetPage = () => {
  const navigate = useNavigate();
  const { catId } = useParams();
  const { getPet, pet } = usePetStore();

  useEffect(() => {
    getPet(Number(catId));
  }, []);

  return (
    <section className="py-20 container mx-auto">
      <div className="flex justify-around px-4 flex-col md:flex-row">
        <div className="w-full md:w-4/12 rounded-lg overflow-hidden relative shadow-lg hover:shadow-sky-300/40 my-4 lg:my-0 ">
          <img
            className="w-full h-full"
            alt={pet?.name}
            src={`${process.env.PUBLIC_URL}/assets/${pet?.imageFileName}`}
          />
        </div>
        <div className="w-full md:w-6/12">
          <h2 className="font-medium text-5xl text-indigo-900  animate__animated animate__fadeInUp">
            Information
          </h2>
          <ul>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-2">Name</h3>
              <p>{pet?.name}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Gender</h3>
              <p>{pet?.gender}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Age</h3>
              <p>{pet?.age}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Description</h3>
              <p>{pet?.description}</p>
            </li>
          </ul>
          <div className="mt-5">
            <Button title="Back" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </section>
  );
};
