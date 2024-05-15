function Home(prop) {

    const changrcolor =() =>{
         var id = document.getElementById("name").style.color = "red";
         console.log(id)
    }

        return (
        <>
            <h2 id="name" >{prop.name}</h2>
            <button type="buton" onClick={changrcolor}> changrcolor</button>
        </>
    )
}

export default Home;