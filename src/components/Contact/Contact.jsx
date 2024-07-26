import React from 'react'
import Container from '../UI/Container'

const Contact = () => {
  return (
    <div>
       <Container>
       <div className="flex justify-center items-center h-screen bg-[#0e1a2b]">
      <div className="bg-[#182c47] p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl text-white mb-4">Contact Form</h2>
        <form  className="flex flex-col gap-4">
          <div>
            <label className="block text-white mb-1" htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-2 bg-[#0e1a2b] text-white rounded-lg outline-none"
              value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-2 bg-[#0e1a2b] text-white rounded-lg outline-none"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="message">Message *</label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 bg-[#0e1a2b] text-white rounded-lg outline-none"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
        </Container>
    </div>
  )
}

export default Contact
