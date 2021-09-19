export default function putStateService({ id, name, description, token }) {
  return fetch("https://api-rest-php-sql.herokuapp.com/states", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify({
      id,
      name,
      description,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
