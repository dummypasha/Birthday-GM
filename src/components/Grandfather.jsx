import { motion } from 'framer-motion'
import gfImage from '../assets/gf.png'

export default function HomeSafePlace({ next, back, stopGfMusic }) {
  return (
    <section className="grandfather-section">
      <motion.div
        className="container grandfather-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>A Girl With Quiet Strength 🌷 & The Journey of Her Dreams 🌙</h1>

        <div className="grandfather-image">
          <img src={gfImage} alt="Grandfather memory" />
        </div>

        <p>
         She carries a quiet strength in her heart 🌙  
         Even miles away from home, chasing her dreams in a new country, she never forgets where she came from.
        </p>

        <p>
          In the middle of busy days, new places, and big goals - 
          there is still a gentle part of her that remembers the small moments that shaped her.
        </p>

        <p>
          She smiles, learns, grows —   
          but deep inside, she is still the same girl who believes in kindness, family, and little pieces of happiness.
        </p>

        <p>
          And no matter how far she travels ✨ 
          her heart always finds its way back to the people who made her feel loved.
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button
            onClick={() => {
              stopGfMusic() // ✅ THIS is the fix
              back()
            }}
          >
            ← Back
          </button>

          <button onClick={next}>A letter →</button>
        </div>
      </motion.div>
    </section>
  )
}
