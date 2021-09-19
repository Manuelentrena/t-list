export default function postStateService({ name, description, token }) {
  return fetch("https://api-rest-php-sql.herokuapp.com/states", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify({
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
