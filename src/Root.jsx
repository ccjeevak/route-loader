import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./common/components";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <section style={{position: "relative"}}>
        {navigation.state === "loading" && <h3
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            textAlign: 'center',
            background: 'rgba(0,0,0,0.2)'
          }}
        >
          {navigation.state}
        </h3>}
        <Outlet />
      </section>
    </>
  );
};
export default Root;
