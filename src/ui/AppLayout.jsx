import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      {
        isLoading ? (
          <div className="my-52 flex justify-center">
            <Loader />
          </div>
        ) : (
          <main className="mx-10 mt-36 mb-14">
            <Outlet />
          </main>
        )
      }
      <Footer />
    </>
  );
};

export default AppLayout;
