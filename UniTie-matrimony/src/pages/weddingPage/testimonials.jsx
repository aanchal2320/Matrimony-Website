import "./testimonials.css";

export default function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <div className="testimonial-image-container">{testimonial.pic}
            {/* <img src={'https://picsum.photos/id/1018/800/300'} alt={testimonial.name} className="testimonial-image" /> */}
          </div>
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-content">{testimonial.comment}</div>
        </div>
      ))}
    </div>
  );
}
