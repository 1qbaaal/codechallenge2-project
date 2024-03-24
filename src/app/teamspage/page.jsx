"use client";
import { useCreateTeams } from "~/api/useCreateTeams";

export default function TeamsPage() {
  const { teams } = useCreateTeams();
  console.log(teams);

  return (
    <div className="w-[80%] h-auto grid grid-cols-2 justify-items-center gap-6 pt-40 px-70">
      {teams?.results?.map((results, index) => {
        return (
          <div key={index}>
            <div className="">
              <img
                src={results.picture.large}
                alt="profile"
                className="h-[400px] w-[300px] rounded-lg text-center"
              />
              <div className="text-center pb-6">
                <h1 className="text-lg font-bold">
                  {results.name.first} {results.name.last}
                </h1>
                <h1>
                  {results.location.city}, {results.location.country}
                </h1>
                <h1>{results.cell}</h1>
                <h1>{results.email}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
