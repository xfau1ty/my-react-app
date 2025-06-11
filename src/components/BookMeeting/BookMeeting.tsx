import { FormEvent, useState } from 'react';
import styles from './BookMeeting.module.css';

const BookMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь можно добавить логику отправки формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.bookMeeting}>
      <div className={styles.content}>
        <h2 className={styles.title}>Book a meeting with us</h2>
        <p className={styles.text}>
          Mattis ornare tincidunt tempus mi vel auctor ipsum venenatis. Tellus nunc
          scelerisque dictum sagittis eiusmod urna egestas quam. In ornare nisl leo
          odio magna.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (Optional)"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="project"
          placeholder="Tell us about the project you are working on (Optional)"
          className={styles.textarea}
          value={formData.project}
          onChange={handleChange}
        />
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </section>
  );
};

export default BookMeeting;
