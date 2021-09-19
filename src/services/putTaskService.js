export default function putTaskService({
  id,
  name,
  idstate,
  iduser,
  description,
  token,
}) {
  return fetch("https://api-rest-php-sql.herokuapp.com/tasks", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify({
      id,
      name,
      idstate,
      iduser,
      description,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
