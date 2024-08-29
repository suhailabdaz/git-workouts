import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

    </div>
  );
}

export default UserRouter;
