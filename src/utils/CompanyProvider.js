import React, { useState, useContext } from "react";

const CompanyContext = React.createContext();
const CompanyUpdateContext = React.createContext();
const CompanyLogoutContext = React.createContext();

export function useCompany() {
  return useContext(CompanyContext);
}

export function useCompanyUpdate() {
  return useContext(CompanyUpdateContext);
}

export function useCompanyLogout() {
  return useContext(CompanyLogoutContext);
}

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState(null);

  const updateCompany = (company) => {
    setCompany(company);
  };

  const logoutCompany = () => {
    setCompany(null);
  };

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      <CompanyUpdateContext.Provider value={updateCompany}>
        <CompanyLogoutContext.Provider value={logoutCompany}>
          {children}
        </CompanyLogoutContext.Provider>
      </CompanyUpdateContext.Provider>
    </CompanyContext.Provider>
  );
}
