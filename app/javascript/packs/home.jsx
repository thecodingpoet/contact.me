// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Home = props => (
  <div>
    <h1>{props.title}!</h1>
    <p>Keep track of your contacts, all in one place, anytime, anywhere!</p>
  </div>
)

Home.propTypes = {
  title: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home title="Contact.me" />,
    document.body.appendChild(document.createElement('div')),
  )
})
