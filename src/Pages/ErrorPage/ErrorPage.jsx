import { useRouteError } from "react-router-dom";
import NavBar from "../../Components/Header/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <>
        <NavBar></NavBar>
        <div className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          page not found
        </div>
      </>
    );
  }
};

export default ErrorPage;
