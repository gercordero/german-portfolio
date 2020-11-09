import React from "react"
import { Layout, ContactForm, SEO } from "../components"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="German Cordero's web portfolio contact page"
      />
      <ContactForm />
    </Layout>
  )
}

export default contact
