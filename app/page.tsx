import CrucialTaskCard from "./components/CrucialTaskCard";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto my-10">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
            <CrucialTaskCard />
          </div>
          <div className="divider"></div>
          <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
            <div className="flex w-full">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                content
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                content
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid h-40 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </main>
  );
}
