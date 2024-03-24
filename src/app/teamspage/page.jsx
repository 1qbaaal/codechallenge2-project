"use client";
import { useCreateTeams } from "~/api/useCreateTeams";

export default function TeamsPage() {
  const { teams } = useCreateTeams();
  console.log(teams);

  return (
    <div className="w-[80%] h-auto pt-40">
      <div className="w-full h-auto flex justify-center items-center pt-6">
        <h1 className="font-bold text-3xl text-[#b21f29]"> OUR TEAM </h1>
      </div>

      <div className="w-full h-auto flex flex-wrap justify-between gap-6 pt-10">
        {teams?.results?.map((value, index) => {
          return (
            <div key={index}>
              <div className="">
                <img
                  src={value.picture.large}
                  alt="profile"
                  className="h-[400px] w-[300px] rounded-lg text-center"
                />
                <div className="text-center pb-6">
                  <h1 className="text-lg font-bold">
                    {value.name.first} {value.name.last}
                  </h1>
                  <h1>
                    {value.location.city}, {value.location.country}
                  </h1>
                  <h1>{value.cell}</h1>
                  <h1>{value.email}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
