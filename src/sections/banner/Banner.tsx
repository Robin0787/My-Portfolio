import image from "../../assets/images/my_photo.png";
import Container from "../../components/ui/Container";

const Banner = () => {
  return (
    <section className="w-full h-full banner pt-[89px]">
      <Container className="w-full h-full">
        <section className="w-full h-full text-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 lg:gap-5">
          <div>
            <div>
              <h1 className="heading bigCursor">Robin</h1>
              <br />
              <h1 className="heading bigCursor">Hossen</h1>
            </div>
          </div>
          <div>
            <img
              src={image}
              alt="my_image"
              className="rounded-full object-fit size-[300px] md:size-[400px] xl:size-[500px]"
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Banner;
