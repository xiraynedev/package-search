import {FC, FormEvent} from 'react';

export const Login: FC = () => {

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <form className="border-amber-100 border p-8" onSubmit={handleLogin} name="form">
      <div className="flex flex-col">
        <input type="text" placeholder="Enter username" className="mt-4 p-2 border" name="username"/>
        <input type="password" placeholder="Enter password" className="mt-4 p-2 border" name="password"/>
        <button type="submit" className="bg-blue-400 mt-4 py-2 pl-1 shadow mb-2 font-bold tracking-wider">Login</button>
      </div>
    </form>
  );
};