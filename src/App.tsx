import React, { useState, useEffect } from 'react';
import { ClientRenewalNotice } from './components/ClientRenewalNotice';
import { ProviderPortal } from './components/ProviderPortal';
import { useCurrentRoute } from './components/useNavigate';

function App() {
  const [currentRoute, setCurrentRoute] = useState(useCurrentRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = useCurrentRoute();
      console.log('Route changed to:', newRoute);
      setCurrentRoute(newRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  console.log('Current route:', currentRoute);

  if (currentRoute === '/portal') {
    return <ProviderPortal />;
  }

  return <ClientRenewalNotice />;
}

export default App;
