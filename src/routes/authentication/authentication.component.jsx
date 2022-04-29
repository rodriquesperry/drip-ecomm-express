import { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";


import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignupForm />
      </div>
    </div>
  );
};

export default Authentication;
