function ChildtoChild1(props) {
  return (
    <button onClick={() => props.sendName("chandra")}>
      Send Name
    </button>
  );
}

export default ChildtoChild1;