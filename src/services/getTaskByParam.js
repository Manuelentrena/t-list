export default function getUserByParam({ token, value, searchBy }) {
  return fetch(
    `https://api-rest-php-sql.herokuapp.com/tasks?${searchBy}=${value}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
