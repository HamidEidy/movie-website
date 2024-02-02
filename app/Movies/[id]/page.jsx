const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: "no-store" });
    return data.json();
}
import Image from "next/image";

const Film = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <>

            <div style={{
                backgroundImage: `url(${data.poster})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw",
                height: "80vh",
                filter: "blur(8px)"
            }}>
            </div>
            <div className="content row" style={{
                backgroundColor: "rgb(0,0,0)",
                backgroundColor: "rgba(0,0,0, 0.4)",
                color: "white",
                fontWeight: "bold",
                border: "3px solid #f1f1f1",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "2",
                width: "80%",
                padding: "20px",
                borderRadius: "5px"
            }}>
                <div className="col-6">
                    <h1 className="font-weight-bolder">{data.title}</h1>
                    <p>Released on: {data.released}</p>
                    <p>Director: {data.director}</p>
                    <p>Writer: {data.writer}</p>
                    <p>Rate: {data.imdb_rating}</p>
                    <p>genres: {data.genres.map((ge, i) => (
                        <span key={i}>#{ge}</span>
                    ))}</p>
                    <p>Plot:</p>
                    <p>{data.plot}</p>
                </div>
                <div className="col-6">
                    {data.images.map((im, i) => (
                        <Image className="col-3" key={i} src={im} height={350} width={200} alt={data.title} 
                        style={{
                            margin: "0px 10px",
                            borderRadius: "5px",
                            border: "3px solid #f1f1f1",
                        }}
                        />
                    ))}
                </div>










            </div>
        </>
    )
}
export default Film;