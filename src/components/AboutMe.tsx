import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center mt-10 py-10">
      <div className="w-1/3	mr-10">
        A skilled front-end developer with three years of experience in building
        responsive, user-friendly web applications. Proficient in HTML, CSS, and
        JavaScript, with expertise in React and Vue.js. Contributed to the
        development of a custom CRM panel for internal use and an e-commerce
        platform with product listings and seller dashboards using Next.js.
        Passionate about creating intuitive user interfaces and delivering
        high-quality code. Known for attention to detail and effective
        collaboration with designers, back-end developers, and stakeholders.
      </div>
      <div className="w-1/4	flex justify-center ml-10">
        <Image
          src="/man-working.jpg"
          alt="man is writing code"
          layout="responsive"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};
export default AboutMe;
