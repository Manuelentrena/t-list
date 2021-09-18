export default function deleteUser({ id, token }) {
  return fetch("https://api-rest-php-sql.herokuapp.com/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
