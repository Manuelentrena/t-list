export default function registerService({
  nombre,
  apellido,
  email,
  password = "",
}) {
  return fetch("https://api-rest-php-sql.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name: nombre, lastname: apellido }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
