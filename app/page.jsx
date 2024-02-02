import Image from "next/image";
const Home = async () => {
  return (
    <>
      <header className="py-5 bg-image-full" style={{
        backgroundImage: "url(/bgpic.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw",
        filter: "grayscale(100%)",

      }}>
        <div className="text-center my-5">
          <Image className="img-fluid rounded-circle mb-4" src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg" width={100} height={100} alt="..." />
          <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
          <p className="text-white-50 mb-0">Landing Page Template</p>
        </div>
      </header>
      <section className="py-2">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Full Width Backgrounds</h2>
              <p className="lead">A single, lightweight helper className allows you to add engaging, full width background images to sections of your page.</p>
              <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that were alone in the universe.</p>
              <button type="button" class="btn btn-dark mt-3">Dark</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
