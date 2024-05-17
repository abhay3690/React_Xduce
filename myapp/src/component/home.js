function Home(prop) {
  const changrcolor = () => {
    var id = (document.getElementById("name").style.color = "red");
    var id1 = (document.getElementById("name").style.color = "green");
    console.log(id1);

    console.log(id);
  };

  return (
    <>
      <h2 id="name">{prop.name}</h2>
      <button type="buton" onClick={changrcolor}>
        {" "}
        changrcolor
      </button>
    </>
  );
}

export default Home;
