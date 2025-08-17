const Login = () => {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            {/* Email ID */}
            <div>
              <fieldset className="fieldset my-2">
                <legend className="fieldset-legend">Email ID</legend>
                <input type="text" className="input" />
              </fieldset>
            </div>
            {/* password */}
            <div>
              <fieldset className="fieldset my-2">
                <legend className="fieldset-legend">Password</legend>
                <input type="text" className="input" />
              </fieldset>
            </div>
            <div className="card-actions justify-center my-2">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
