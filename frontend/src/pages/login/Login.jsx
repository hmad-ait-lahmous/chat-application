import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-[#3F403F] bg-clip-padding'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Se connecter
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='label-base label-text'>Nom d'utilisateur</span>
            </label>
            <input
              type="text"
              placeholder='Enter le nom d utilisateur...'
              className='w-full input input-bordered h-10'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='label-base label-text'>Mot de passe</span>
            </label>
            <input
              type="password"
              placeholder='Enter le mot de passe...'
              className='w-full input input-bordered h-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Vous {"n'avez"} pas de compte ?
          </Link>
          <div>
            <button 
              className='btn glass btn-block btn-sm mt-2'
              disabled={loading}>
              {loading? <span className='loading loading-spinner'></span> : 'Se connecter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
