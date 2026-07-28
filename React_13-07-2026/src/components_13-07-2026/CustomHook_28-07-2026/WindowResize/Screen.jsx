import useWindowSize from "./useWindowSize";

function Screen() {

  let size = useWindowSize();

  return (
    <>
      <h2>Width : {size.width}</h2>
      <h2>Height : {size.height}</h2>
    </>
  );
}
export default Screen;