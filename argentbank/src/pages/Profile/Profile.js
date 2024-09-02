import "./Profile.css";
import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import AccountsList from "../../components/AccountsList/AccountsList";
// import AccountsDetails from "../../components/AccountsDetails/AccountsDetails";

function Profile() {
  return (
    <div className="main background-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <AccountsList />
      {/* <AccountsDetails /> */}
    </div>
  );
}

export default Profile;
