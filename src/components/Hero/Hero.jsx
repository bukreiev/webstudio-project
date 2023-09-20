import { Form, Formik, Field } from 'formik';
import {
  HeroSection,
  Button,
  Title,
  Backdrop,
  Modal,
  Close,
  ModalTitle,
  ModalText,
  ModalLink,
  Submit,
} from './Hero.styled';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setIsOpen(!true);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const modalOpen = () => {
    setIsOpen(current => !current);
  };

  return (
    <>
      <HeroSection>
        <Title>
          Effective solutions <br />
          for your business
        </Title>
        <Button type="button" onClick={modalOpen}>
          Order service
        </Button>
        <Backdrop className={isOpen ? 'modal-open' : ''}>
          <Modal>
            <Close onClick={modalOpen}></Close>
            <ModalTitle>Leave your contacts, we will call you back</ModalTitle>
            <Formik
              initialValues={{
                Name: '',
                Phone: '',
                Email: '',
                Comment: '',
                Checkbox: false,
              }}
            >
              <Form className="form">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <Field
                  className="form__field"
                  id="name"
                  name="name"
                  placeholder="John"
                />

                <label className="form__label" htmlFor="phone">
                  Phone
                </label>
                <Field
                  className="form__field"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+380938889988"
                />

                <label className="form__label" htmlFor="email">
                  Email
                </label>
                <Field
                  className="form__field"
                  id="email"
                  name="email"
                  placeholder="john@gmail.com"
                  type="email"
                />
                <label className="form__label" htmlFor="comment">
                  Comment
                </label>
                <textarea
                  className="form__field"
                  id="comment"
                  name="comment"
                  placeholder="Leave your comment here"
                  type="textarea"
                ></textarea>
                <div>
                  <Field type="checkbox" name="checkbox"></Field>
                  <ModalText>
                    I agree with the newsletter and accept{' '}
                    <ModalLink>Agreement conditions</ModalLink>
                  </ModalText>
                </div>
                <Submit type="submit">Send</Submit>
              </Form>
            </Formik>
          </Modal>
        </Backdrop>
      </HeroSection>
    </>
  );
}
