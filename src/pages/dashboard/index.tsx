import ShadowCard from "@/components/general/ShadowCard";
import MainLayout from "@/layouts/mainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-viridian-950 font-medium shrink-0">
          Dashboard
        </h1>
        <ShadowCard>
          <p>cntainer</p>
        </ShadowCard>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
