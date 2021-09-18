export default function registerService({
  name,
  lastname,
  email,
  password = "",
  direction = "",
  available = 1,
}) {
  return fetch("https://api-rest-php-sql.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
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
