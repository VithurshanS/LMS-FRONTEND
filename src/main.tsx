import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
  authority: import.meta.env.VITE_KEYCLOAK_AUTHORITY,
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  client_secret: import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET,
  redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
  </StrictMode>,
)
