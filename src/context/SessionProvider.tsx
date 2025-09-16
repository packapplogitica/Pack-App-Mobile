import { createContext, useContext } from "react";
import { useCapacitorSession } from "../hooks/useCapacitorSession";

const SessionContext = createContext<any>(null);

export function SessionProvider({ children }) {
  const { session, login, logout, loading } = useCapacitorSession();

  return (
    <SessionContext.Provider value={{ session, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionProvider() {
  return useContext(SessionContext);
}
