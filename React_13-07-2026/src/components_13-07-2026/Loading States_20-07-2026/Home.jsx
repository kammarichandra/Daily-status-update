import React , {useEffect , useState} from 'react'
import Loading from './Loading';
import Empty from './Empty';
import Userlist from './Userlist';

function Home() {

  let [loading, setLoading] = useState(true);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {

      setUsers([]);

      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (users.length === 0) {
    return <Empty />;
  }

  return <Userlist users={users} />;
}

export default Home;