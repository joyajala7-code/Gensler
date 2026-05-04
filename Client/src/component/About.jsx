import { useState, useEffect, useRef } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-cyan-500 px-6 py-24 sm:py-32 lg:px-8 mt-20 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]"
    >

      {/* White skew background */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 ring-cyan-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        {/* Logo */}
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
          className={`mx-auto h-12 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        />

        <figure className="mt-10">

          {/* Quote */}
          <blockquote
            className={`text-center text-xl/8 font-semibold sm:text-2xl/9 transition-all duration-700 ease-out delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-cyan-900">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis."
            </p>
          </blockquote>

          <figcaption
            className={`mt-10 transition-all duration-700 ease-out delay-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-cyan-900">Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-cyan-700">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-cyan-700">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}