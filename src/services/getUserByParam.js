export default function getUserByParam({ token, value, searchBy }) {
  console.log("dentro de service getUserByParam");
  console.log({ token, value, searchBy });
  console.log(
    `https://api-rest-php-sql.herokuapp.com/users?${searchBy}=${value}`
  );
  return fetch(
    `https://api-rest-php-sql.herokuapp.com/users?${searchBy}=${value}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: token,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
