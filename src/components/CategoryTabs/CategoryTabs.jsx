import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./CategoryTabs.css";

const galleryItems = [
  {
    id: 1,
    title: "Free Medical Camp",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963425/SaveClip.App_AQPottOBoI13jhxZG7ufb64dX8YYx7XAt0T4r8X8pJ8ku0go9l_uQXRv4tqV92w6mW9R6xMFZWCv-OuG3zrorFkmmQVWKHA9bNiIaWE_ipmhyu.mp4",
  },
  {
    id: 2,
    title: "Community Welfare Program",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963423/SaveClip.App_AQN6NtyU1710hswfRY4fX-BzXTkRJOBeGwFHjdxPaAk4Ih4yt_ETKdEcrbFlQ_FsMynibXgeTq8WQkqI28u3KP6lkEU0NY_lF53vadQ_kxnoi5.mp4",
  },
  {
    id: 3,
    title: "Healthcare Awareness",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963422/SaveClip.App_AQOS9Cl6v4cMgMM7d4_DbE0IsW8Z0CmJ2LIBqYK6KaRhJVWxEriuxrnpM3_FwwOPzl5lLtl8fR4ERQ4o0SssagBKEX7yFYL0G6fMi2k_jmhwxy.mp4",
  },
  {
    id: 4,
    title: "Medical Outreach",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963436/SaveClip.App_AQMLESgvt8ERB5pJA8g3iVEmkt3dHobkUgFEOdVstolVx1O8tCT3dRPEtXLYXzwN_iSiUKMPvoEHu9qU4WrPtHfoWYpf4u4TvpX3j2w_kwlqwb.mp4",
  },
  {
    id: 5,
    title: "Trust Activities",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963420/SaveClip.App_AQM72bcAlYjNmAR7rul662ynUVTtw3mPWS8XZi0AZVHzSomM5WE4XzjYwKodUQSRo2sXFVLODYRCQH9VUxSJFN3oloNohTrerN4VSCo_qimg1m.mp4",
  },
  {
    id: 6,
    title: "Community Service",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963396/SaveClip.App_AQOVzDKstfb-mvdMoLcAhBps1acHzTGkcGvZ2h3C4bUemkIY02l48kRQqBp8-wIdifVMTgLTU9SMnB2cFJxWpZO88ZWJxpMIk-oetdI_nya0t7.mp4",
  },
  {
    id: 7,
    title: "Medical Camp",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1786963416/SaveClip.App_755692936_18606840733012408_458230278407811867_n_irnzlq.jpg",
  },
  {
    id: 8,
    title: "Healthcare Service",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1786963897/SaveClip.App_714851133_17884567416572226_1067923342390014556_n_aype3o.webp",
  },
  {
    id: 9,
    title: "Trust Volunteers",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963408/SaveClip.App_AQNCP7caWoGla1ugszDbY8J4T6xKg05NqHMkHoIfMzf7ZeIIZsnPKO5uSubadZ1CHX8uY34PwtXWB1c3j5xVo0685FtwXIaZn3UwbYM_wbj0d3.mp4",
  },
  {
    id: 11,
    title: "Medical Awareness",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963397/SaveClip.App_AQNoFBr_KCRm3kljHfPwIJFzFN6Ong9fEyrqJZcXyro2fgnZRX0WIAY9SJIB39RmghSqODxFB6ZVhQnztcyrDPqlpNqSYP05CjCPkkE_eirpq3.mp4",
  },
  {
    id: 12,
    title: "Patient Care",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963388/SaveClip.App_AQOxP5w002qbDnNSfap2r0yERxt-iOMy4oyyN4YyaIu3YoqDPxNHVgkDdWGLGNov_11OzWMo8xr_2Nm2ZXMd5xyp4DhMBL3CLOfIsoM_znvmex.mp4",
  },
  {
    id: 13,
    title: "Health Camp",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963404/SaveClip.App_AQPotaGTgTk6SmbZhNWJxmjmfTtq4KnIw7IlCuRHuq7qOEqZtjhL0tp0-QX9qzLUSyV2t35PFdmD2r96AnrJMOXJ6Kdn8WkOXqXVsI0_mfbnff.mp4",
  },
  {
    id: 14,
    title: "Surya Trust",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1786963422/SaveClip.App_AQOJ_E8PAva8beTlP1Yt800H3GiFOJqpVMQCARMgsw8LlvoQ4c1KvQ0RItJoabadkHmwHI69SGXVEG_b-aGtWtLARLrfTgjNJTggaFo_uatn3w.mp4",
  },
];

const filters = ["All", "Medical & Trust", "Free Seminar", "Placement Training"];

const isVideo = (url) => /\.(mp4|webm|ogg|mov)$/i.test(url);

function CategoryTabs() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      className="event-gallery trust-section trust-section--cream"
      id="gallery"
      ref={ref}
    >
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="camera" size={28} />}
          label="Event Gallery"
          title="Moments of"
          highlight="Impact"
          description="A visual journey through our programs, camps, and community events."
        />

        {/* Filter buttons */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`gallery-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid — CSS columns layout */}
        <motion.div
          className="masonry-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                className="masonry-item"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{ y: -5 }}
                onClick={() => setLightbox(item)}
              >
                {/* Media */}
                {isVideo(item.url) ? (
                  <div className="media-wrap">
                    <video
                      src={item.url}
                      className="gallery-media"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="play-badge" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#C0392B" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="media-wrap">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="gallery-media"
                    />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="masonry-overlay">
                  <span className="masonry-category">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media */}
              {isVideo(lightbox.url) ? (
                <video
                  src={lightbox.url}
                  controls
                  autoPlay
                  playsInline
                  className="lightbox-media"
                />
              ) : (
                <img
                  src={lightbox.url}
                  alt={lightbox.title}
                  className="lightbox-media"
                />
              )}

              {/* Footer info bar */}
              <div className="lightbox-divider" />
              <div className="lightbox-info">
                <div className="lightbox-text">
                  <span className="lightbox-cat">{lightbox.category}</span>
                  <h3>{lightbox.title}</h3>
                </div>
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setLightbox(null)}
                  aria-label="Close lightbox"
                >
                  <TrustIcon name="times" size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CategoryTabs;
