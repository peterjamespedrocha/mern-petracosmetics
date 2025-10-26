// client/src/components/shopping-view/layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "@/components/common/Footer"; // <-- IMPORT ITO

function ShoppingLayout() {
  return (
    <div className="w-full">
      <Header />
      <main className="min-h-[calc(100vh-150px)]"> {/* Adjust min-height if needed based on header/footer size */}
        <Outlet />
      </main>
      <Footer /> {/* <-- IDAGDAG ITO DITO */}
    </div>
  );
}

export default ShoppingLayout;