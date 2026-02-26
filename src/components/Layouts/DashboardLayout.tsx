import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <div className="w-[10%]">sidebar</div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
