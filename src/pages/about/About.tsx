import myImage from "../../assets/images/my_image.png";

const About = () => {
  return (
    <section className="h-screen w-full primaryBg text-white pt-[71px]">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <article className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 overflow-visible">
          <div className="w-full md:w-[30%]">
            <img
              src={myImage}
              alt="my_img"
              className="mx-auto object-cover rounded bg-white h-[400px]"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <h1 className="bigCursor heading ">Hello World</h1>
          </div>
        </article>
        <article>
          <div></div>
        </article>
      </section>
    </section>
  );
};

export default About;
