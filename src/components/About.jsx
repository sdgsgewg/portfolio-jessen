import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-3">
            <h4 className="font-bold uppercase text-primary text-lg">
              About Me
            </h4>
          </div>
          <div className="flex flex-wrap">
            <div className="slide-left w-full px-4 mb-10 lg:w-1/2">
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                I’m currently studying Computer Science with a focus on Web
                Development at Bina Nusantara University
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                I am a hardworking individual who enjoys exploring new things to
                continuously improve my skills. I have experience in programming
                languages such as C, Python, Java, C#, HTML, CSS, JavaScript,
                TypeScript, and PHP. Additionally, I have worked with popular
                libraries and frameworks, including React, Laravel, Bootstrap,
                and Tailwind CSS. My goal is to make significant contributions
                to the field of computer science through my skills and
                dedication.
              </p>
            </div>
            <div className="slide-right w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">
                Connect With Me
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Let’s connect! Feel free to reach out if you’re interested in
                collaborating, have a question, or just want to chat.
              </p>

              <div className="flex items-center justify-center mb-5">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
