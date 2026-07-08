function JsFunctions() {
  function hai(name) {
    return `hello,${name}`;
  }

  function add(a, b) {
    return a + b;
  }

  function currentyear() {
    return new Date().getFullYear();
  }

  return (
    <div>
      <h1>{hai("chandra")}</h1>
      <p>sum : {add(10, 20)}</p>
      <p>year : {currentyear()}</p>
    </div>
  );
}

export default JsFunctions;