import { Outlet } from "react-router-dom";

export default function VisitorLayout() {
    return (
        <div className="font-poppins bg-white text-gray-900">
            <Outlet />
        </div>
    );
}