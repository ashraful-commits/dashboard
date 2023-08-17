import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";


const LayoutPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        {/* <!-- Page Wrapper --> */}
            {/* <!-- /Page Header --> */}
            <div className="page-wrapper">
  <div className="content container-fluid">
      
            <Outlet />
    </div>
    </div>
     
    
        {/* <!-- /Page Wrapper --> */}
      </div>
    </>
  );
};

export default LayoutPage;
