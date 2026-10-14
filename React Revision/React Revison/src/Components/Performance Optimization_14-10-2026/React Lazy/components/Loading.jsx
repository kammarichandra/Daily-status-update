function Loading() {
  console.log("Loading fallback displayed");

  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <h3>Loading TeamSync page...</h3>
      <p>Please wait while the page loads.</p>
    </div>
  );
}

export default Loading;