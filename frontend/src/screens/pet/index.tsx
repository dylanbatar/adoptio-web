import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";

export interface PetPageProps {
  id?: number;
  name?: string;
  gender?: string;
  imageFileName?: string;
  description?: string;
  age?: string;
}

export const PetPage = ({
  name,
  gender,
  imageFileName,
  description,
  age,
}: PetPageProps) => {

  const navigate = useNavigate();

  return (
    <section className="py-20 container mx-auto">
      <div className="flex justify-around">
        <div className="w-4/12 rounded-lg overflow-hidden relative shadow-lg hover:shadow-sky-300/40 my-4 lg:my-0 ">
          <img
            className="w-full h-full"
            alt={name}
            src={`${process.env.PUBLIC_URL}/assets/${imageFileName}`}
          />
        </div>
        <div className="w-6/12">
          <h2 className="font-medium text-5xl text-indigo-900  animate__animated animate__fadeInUp">
            Information
          </h2>
          <ul>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-2">Name</h3>
              <p>{name}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Gender</h3>
              <p>{gender}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Age</h3>
              <p>{age}</p>
            </li>
            <li>
              <h3 className="text-indigo-900 text-2xl mt-4">Description</h3>
              <p>{description}</p>
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
