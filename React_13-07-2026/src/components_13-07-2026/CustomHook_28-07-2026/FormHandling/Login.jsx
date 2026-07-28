import useForm from "./useForm";

function Login() {

  let username = useForm("");

  return (
    <>
      <input value={username.value} onChange={username.handleChange} />

      <h3>{username.value}</h3>
    </>
  );
}
export default Login;