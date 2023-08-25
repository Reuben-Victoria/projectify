type TestimonialsProps = {
  name: string;
  testimonial: string;
};
const Testimonials = ({ name, testimonial }: TestimonialsProps) => {
  return (
    <article>
      <p>{testimonial}</p>
      <div>
        <div>
          {/* <img src={} /> */}
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </article>
  );
};
