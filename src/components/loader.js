import giphy from './giphy.gif';

// this is what will appear when the file is loading 

const Loader = () => {
    return (
        <div className="loader">
            <img src={giphy} alt="Loading " /> {/**this is where the image will exacly go! :) im tired  */}
            <h1>Welcome to the UB Air Quality Buddy!</h1>
        </div>
    )
}

export default Loader