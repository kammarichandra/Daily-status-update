function Header() {
  return <h1>Student Portal</h1>;
}

function Student() {
  return <h2>chnadra</h2>;
}

function Footer() {
  return <p>© 2026</p>;
}

function ComponentComposition() {
    
  return (
    <>
      <Header />
      <Student />
      <Footer />
    </>
  );
}

export default ComponentComposition;