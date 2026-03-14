import { motion } from 'framer-motion'

export default function Parents({ next, back }) {
  return (
    <section>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Her Roots</h1>

        <p>Parents who trusted her dreams.</p>
        <p>Who stood behind her silently, proudly.</p>

        <p>
          They never rushed her.
        </p>

        <p>
          In every quiet prayer,  
          there was hope, strength, and endless love 🤍
        </p>

        <p>
          The confidence she carries today ✨  
          was gently built at home.
        </p>

        <p>
          No matter how far she goes,  
          their love always walks with her.
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={next}>Something special →</button>
        </div>
      </motion.div>
    </section>
  )
}
