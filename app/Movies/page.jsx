
const getData = async () => {
    const data = await fetch("https://moviesapi.ir/api/v1/movies", { cache: "no-store" });
    await sleep(3000)
    return data.json();
}
import Image from "next/image";
import sleep from "sleep-promise";
import Link from "next/link";
import Pagination from "@/components/Pagination";
const Movie = async () => {
    const data = await getData();
    return (
        <main classNameName="text-center justify-content-center d-flex mt-5">

            <div classNameName="d-flex col-10 container">

                <div className="row gap-3 d-flex justify-content-center mt-5">

                    {
                        data.data.map((mov, i) => (
                            <div key={i} className="card col-2 p-3">
                                <Image src={mov.poster} className="card-img-top" height={400} width={200} alt="..." />
                                <div className="card-body">
                                    <h1 className="card-text">
                                        <Link className="text-dark" href={`/Movies/${mov.id}`}>{mov.title}</Link>
                                    </h1>
                                    <br />
                                    <div className="items">
                                        <span className="card-text">{mov.year}</span>
                                        <span className="card-text">{mov.country}</span>
                                    </div>

                                </div>
                            </div>


                        ))
                    }
                </div>

                <Pagination />
            </div>
      
        </main>

    );

}
export default Movie;
