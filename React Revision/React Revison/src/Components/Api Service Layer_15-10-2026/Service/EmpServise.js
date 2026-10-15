import ClientApi from "../Api/ClientApi";


export function getEmployees() {
  return ClientApi.get("/users");
}