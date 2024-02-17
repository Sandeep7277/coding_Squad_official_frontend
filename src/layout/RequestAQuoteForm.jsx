import { useState } from "react";

const RequestAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="   p-4 " onSubmit={handleSubmit}>
      <div className="mb-3 mx-0">
        <input
          className="p-3 w-100 "
          type="text"
          id="name"
          name="name"
          // size={35}
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 ">
        <input
          type="email"
          id="email"
          name="email"
          // size={35}
          className="p-3 w-100"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <select
          id="service"
          name="service"
          className="p-3 w-100"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
      </div>
      <div className="mb-3">
        <textarea
          id="message"
          name="message"
          size={35}
          className="p-3 w-100"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-3 ">
        <button className="p-3 w-100" type="submit">
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default RequestAQuoteForm;
