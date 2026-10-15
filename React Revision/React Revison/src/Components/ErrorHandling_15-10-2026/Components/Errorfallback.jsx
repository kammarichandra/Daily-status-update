
function Errorfallback() {
  return (
    <div role="alert">
      <h2>Something went wrong!</h2>
      <p>We could not display this page.</p>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  );
}

export default Errorfallback;
