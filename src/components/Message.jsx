import { motion } from 'framer-motion'

export default function Message({ next, back }) {
  return (
    <section>
      <motion.div
        className="container letter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Dear Mahima,</h1>

        <p>
          Just a small reminder 🤍  
          you are doing better than you think.
        </p>

        <p>
          The way you stay kind, even when things feel heavy,  
          says so much about your heart.
        </p>

        <p>
          Your strength doesn’t always shout —  
          sometimes it shows up quietly, every single day.
        </p>

        <p>
          Keep believing in yourself 🌸  
          you are growing in ways you don’t even notice yet.
        </p>

        <p>
          And no matter where life takes you,  
          I’ll always be cheering for you — quietly, sincerely.
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={next}>Celebrate 🎉</button>
        </div>
      </motion.div>
    </section>
  )
}
