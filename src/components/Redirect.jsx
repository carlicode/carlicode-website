import { Navigate, useLocation } from "react-router-dom";

// Links viejos que ya se compartieron siguen funcionando y conservan ?lang=.
export default function Redirect({ to }) {
  const { search } = useLocation();
  const [path, query] = to.split("?");
  const params = new URLSearchParams(query);
  new URLSearchParams(search).forEach((value, key) => params.set(key, value));
  const qs = params.toString();
  return <Navigate to={qs ? `${path}?${qs}` : path} replace />;
}
