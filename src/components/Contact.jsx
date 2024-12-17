import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Spinner } from 'react-spinners'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (form.name === '' || form.email === '' || form.message === '') {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)

    const TELEGRAM_BOT_TOKEN = '7923723398:AAFY8rLRFrELUA07Oadx1lNtTzhNJnarMm8'
    const TELEGRAM_CHAT_ID = '6352403183'

    const message = `📩 *New Contact Form Submission*\n\n👤 *Name*: ${form.name}\n📧 *Email*: ${form.email}\n📝 *Message*: ${form.message}`

    try {
      // Send message to Telegram Bot
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
          })
        }
      )

      // Send animation (GIF or sticker) to Telegram
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendAnimation`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            animation: 'https://media.giphy.com/media/3o6gE5aYMG2jiATQ3S/giphy.gif', // Example GIF URL
          })
        }
      )

      setLoading(false)
      setSuccess(true)

      // Reset form
      setForm({
        name: '',
        email: '',
        message: ''
      })
      setError('')
    } catch (error) {
      console.error('Error sending message to Telegram:', error)
      setLoading(false)
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {error && <p className='text-red-500'>{error}</p>}

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? (
              <div className="flex justify-center">
                <Spinner size={30} color="white" />
              </div>
            ) : (
              'Send'
            )}
          </button>
        </form>

        {/* Success message with animation */}
        {success && (
          <motion.div
            className='mt-4 p-4 bg-green-500 text-white rounded-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your message has been sent successfully!
          </motion.div>
        )}
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
