import GlobalUseEffect from '../../middleware/useEffect/universalUseEffect';

const AuthDataComponent = () => {
  const data = GlobalUseEffect(); // ✅ Now it's inside a functional component

  const AuthData = {
    email: data?.email,
    username: data?.employee_id,
    employee_code: data?.employee_code,
  };
  return AuthData;


};

export default AuthDataComponent;
