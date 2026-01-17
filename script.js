:root {
  --primary: #b8975e; /* Gold accent */
  --dark: #1a1a1a;
  --dark-2: #242424;
  --gray: #777777;
  --light: #f8f6f1;
  --white: #ffffff;

  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  --transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  --shadow: 0 18px 50px -12px rgba(0,0,0,0.28);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--dark);
  line-height: 1.58;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5vw;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(26,26,26,0.88);
  backdrop-filter: blur(10px);
  transition: var(--transition);
}

.header.scrolled {
  background: rgba(26,26,26,0.97);
  box-shadow: 0 4px 25px rgba(0,0,0,0.3);
}

.header .container {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--primary);
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: -1.5px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 3.2rem;
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
  transition: var(--transition);
}

.nav-list a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -6px;
  left: 0;
  background: var(--primary);
  transition: width 0.45s ease;
}

.nav-list a:hover::after,
.nav-list a.active::after {
  width: 100%;
}

.nav-list a:hover,
.nav-list a.active {
  color: var(--primary);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

/* Hero */
.hero {
  height: 100vh;
  min-height: 740px;
  background: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.38)),
              url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format') center/cover no-repeat fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 920px;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(3.8rem, 8vw, 8.4rem);
  font-weight: 700;
  line-height: 0.92;
  margin-bottom: 1.4rem;
  letter-spacing: -2px;
}

.hero-tagline {
  font-size: clamp(1.4rem, 3.5vw, 2.1rem);
  font-weight: 400;
  opacity: 0.94;
  margin-bottom: 1.8rem;
}

.hotline {
  margin-bottom: 2.5rem;
}

.hotline p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.project-filters {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.filter-btn {
  padding: 0.8rem 2rem;
  background: transparent;
  border: 2px solid var(--primary);
  color: white;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary);
  color: var(--dark);
}

/* Sections General */
.section {
  padding: 8rem 0;
}

.section-label {
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  text-align: center;
  margin-bottom: 4rem;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 12px;
  background: var(--dark-2);
  color: white;
  transition: var(--transition);
}

.project-card.hidden {
  display: none;
}

.project-card:hover {
  transform: translateY(-14px);
  box-shadow: var(--shadow);
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.35s ease;
}

.project-card:hover img {
  transform: scale(1.09);
}

.project-info {
  position: absolute;
  inset: auto 0 0 0;
  padding: 2.2rem 1.8rem;
  background: linear-gradient(transparent 30%, rgba(0,0,0,0.88) 70%);
}

.project-info h3 {
  font-size: 1.7rem;
  margin-bottom: 0.4rem;
}

.project-info p {
  font-size: 1.1rem;
  opacity: 0.85;
}

/* About */
.about-section p {
  max-width: 800px;
  margin: 1rem auto;
  text-align: center;
  font-size: 1.1rem;
}

/* Major Projects */
.major-projects-list {
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
  columns: 2;
  gap: 2rem;
}

.major-projects-list li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.major-projects-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
}

/* Contact */
.contact-section {
  background: var(--light);
}

.contact-info {
  max-width: 600px;
  margin: 0 auto 3rem;
  text-align: center;
}

.contact-info p {
  margin: 1rem 0;
  font-size: 1.1rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 6px;
  font-size: 1rem;
}

.contact-form textarea {
  min-height: 150px;
}

.contact-form button {
  align-self: center;
}

/* Footer */
.footer {
  background: var(--dark);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-address,
.footer-enquiries,
.footer-email {
  flex: 1;
}

.footer-nav {
  text-align: center;
  margin-bottom: 1rem;
}

.footer-nav .nav-list {
  justify-content: center;
}

.footer-nav a {
  color: white;
}

.footer-copyright {
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;
}

/* Buttons */
.btn-primary {
  display: inline-block;
  padding: 1.1rem 2.8rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: var(--transition);
}

.btn-primary:hover {
  background: #d4b37a;
  transform: translateY(-4px);
  box-shadow: 0 16px 45px rgba(184,151,94,0.38);
}

/* Media Queries */
@media (max-width: 992px) {
  .main-nav {
    display: none;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    background: rgba(26,26,26,0.98);
    padding: 2rem;
  }

  .main-nav.active {
    display: block;
  }

  .nav-list {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .menu-toggle {
    display: block;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: clamp(3.2rem, 9vw, 6.2rem);
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .major-projects-list {
    columns: 1;
  }

  .project-filters {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
