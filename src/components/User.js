import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {JSON.stringify(user)}
    </div>
  );
}

export default User;
