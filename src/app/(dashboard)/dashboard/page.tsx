import { getUserSession } from "@/helpers/getUserSession";


const DashboardHomePage = async() => {
const session =await getUserSession()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        welcome, {session?.user?.name}
      </h1>
      <p className="text-lg text-gray-500 italic text-center">{session?.user?.email}</p>
      <p className="text-lg text-gray-500 italic text-center mt-2">Know your enemy and know yourself and you can fight a hundred battles without disaster</p>
    </div>
  );
};

export default DashboardHomePage;
