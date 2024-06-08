import Container from "../../components/ui/Container";

const Banner = () => {
  return (
    <section className="w-full h-screen primaryBg pt-[89px]">
      <Container className="w-full h-full">
        <section className="w-full h-full text-white flex justify-center items-center">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-center text-5xl font-bold leading-tight text-neutrals-50 md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight bigCursor uppercase">
              Programming
              <br />
              and Design
              <br />
              from the Future
            </h1>
            <a
              href="/#projects"
              className={`text-base sm:text-lg lg:text-xl mt-8 md:mt-12 py-3 px-4 md:px-6 md:py-4 lg:px-8 bg-white text-black border hover:bg-black duration-500 hover:text-white hover:tracking-[2px]`}
            >
              Dig into my universe
            </a>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Banner;
