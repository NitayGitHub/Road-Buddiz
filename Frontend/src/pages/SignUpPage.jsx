import "../styles/SignUpPage.css";
import SignUpCard from "../components/SignUpCard";
import logoWithoutBack from '../assets/logo-withoutback.png'

function SignUpPage() {
  return (
    <div id="signup-page-content">
      <div className="top-center">
        <img src={logoWithoutBack} alt="Logo" />
      </div>
      <div id="signup-page-card">
        <SignUpCard />
      </div>
    </div>
  );
}

export default SignUpPage;
