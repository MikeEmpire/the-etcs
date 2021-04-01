import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="id-container">
      <article id="shirt">
        <img
          alt="random shirt for placeholder"
          src="https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png"
        />
        <article>
          <h4>Shirt</h4>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="aolie94@gmail.com" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="T Shirt" />
            <input type="hidden" name="amount" value="10.00" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="button_subtype" value="services" />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="tax_rate" value="2.000" />
            <input type="hidden" name="shipping" value="10.00" />
            <input
              type="hidden"
              name="bn"
              value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </article>
      </article>
    </section>
  </Layout>
)

export default IndexPage
