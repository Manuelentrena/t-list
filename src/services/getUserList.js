export default function getUserList({ token }) {
  return fetch(`https://api-rest-php-sql.herokuapp.com/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
