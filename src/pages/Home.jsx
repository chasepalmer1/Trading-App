import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id}! Welcome to TradeHub!</h1>
        </div>
    )
}

export default Home