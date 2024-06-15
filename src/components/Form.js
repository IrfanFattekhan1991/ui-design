import logo from "../logo.svg";
import Login from "./Login";
const Form = () => {
  return (
    <div className="grandParent">
      <div className="parent">
        <div className="child1">
          <img src={logo} alt="app_logo" />
          <p>
            But, most features and its updates are hidden into the internals of
            create-react-app system. If you make eject you will have no more new
            features and its update. So if you are not ready to manage and
            configure.
          </p>
        </div>
        <div className="child2">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Form;
