// src/components/Login.jsx
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8  shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Inicia sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Ingresar
            </button>
            {/*
            <a
              className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              href="#"
            >
              Olvidé mi contraseña
            </a>
            */}
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">¿No tienes una cuenta?</p>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/register"
          >
            Registrarme
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
