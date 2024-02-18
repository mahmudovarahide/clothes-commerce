import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <SignIn />
      </div>
      <div className="col-md-6">
        <SignUp />
      </div>
    </div>
  );
};
export default Authentication;
