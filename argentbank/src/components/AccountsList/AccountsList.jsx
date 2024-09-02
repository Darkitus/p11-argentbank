import React from "react";
import Account from "./Partials/Account";
import { Accounts } from "./ApiMock/Accounts";

const AccountsList = () => {
  // Créer une liste de composants Account à partir de la liste d'objets Accounts
  const renderedAccountsCards = Accounts.map((account) => {
    return <Account account={account} key={account.accountId} />; // Créer un composant Account avec les données de chaque compte et une clé unique
  });
  return renderedAccountsCards;
};

export default AccountsList;
