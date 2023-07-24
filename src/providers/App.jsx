import { HelmetProvider } from "react-helmet-async";

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
}

export default AppProvider;
