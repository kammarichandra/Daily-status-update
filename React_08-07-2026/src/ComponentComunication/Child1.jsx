function Child1({ msg, updatemsg }) {
  return (
    <div>
      <h2>Child1</h2>
      <p>received : {msg}</p>
      <button onClick={() => updatemsg("msg updated by child1")}>update parent</button>
    </div>
  );
}

export default Child1;