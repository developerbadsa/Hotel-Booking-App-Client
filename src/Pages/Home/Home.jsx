import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";


const Home = () => {
      return (
            <HelmetProvider>
                  <div>
                        <Helmet>
                              <title>Home | Hotel Booking</title>
                              <link rel="icon" type="image/png" href="Images/Icons/home.png" />
                        </Helmet>
                        <div className="bg-slate-500">home</div>
                  </div>
            </HelmetProvider>

      );
};

export default Home;