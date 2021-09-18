export default function putUser({
  id,
  name,
  lastname,
  direction = "",
  available = 1,
  token,
}) {
  return fetch("https://api-rest-php-sql.herokuapp.com/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify({
      id,
      name,
      lastname,
      direction,
      available,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
