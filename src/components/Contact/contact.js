import React from "react"
import Title from "../Title"
import styled from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styled.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styled.center}>
        <form
          action="https://formspree.io/slawomirdyk@gmail.com"
          method="POST"
          className={styled.form}
        >
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Plase type your name here"
              className={styled.formControl}
            />
          </div>
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              className={styled.formControl}
            />
          </div>
          <div>
            <label htmlFor="name">Massage</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Please type your massage here"
              className={styled.formControl}
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styled.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
