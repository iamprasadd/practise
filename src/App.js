import "./App.css";

function App() {
  return (
    <div>
      <div className="d-flex justify-content-between p-4">
        <h1>Start Bootstrap</h1>
        <button className="btn btn-primary">Sign Up</button>
      </div>
      <div className="bg-container d-flex justify-content-center align-items-center">
        <div className="w-25">
          <h1 className="fw-bold text-white mb-5">
            Generate more leads with a professional landing page!
          </h1>
          <div class="input-group mb-3">
            <input
              type="email"
              className="form-control form-control-lg me-4"
              placeholder="Email Address"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
