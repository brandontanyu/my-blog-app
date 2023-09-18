const Home = () => {
    let handleClick = (e) => console.log("Hello, Brandon",e.cancelable);
    let handleClickAgain = (name,e) => console.log(`Hello ${name}`,e.target);
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain("Sosah",e)}>ClickMeAgain</button>
        </div>
     );
}
 
export default Home;