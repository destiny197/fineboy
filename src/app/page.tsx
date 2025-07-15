import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <Link href="/" className="logo">
              <Image src="/wp-content/themes/um/assets/img/logo.svg" alt="UM Marketing" width={120} height={40} />
            </Link>
            
            <nav className="nav">
              <ul className="nav-list">
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#case-studies">Case Studies</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </nav>
            
            <button className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Scale Your E-commerce Business with 
              <span className="highlight"> Performance Marketing</span>
            </h1>
            <p className="hero-description">
              We help e-commerce brands achieve profitable growth through data-driven 
              Facebook Ads, Google Ads, and conversion optimization strategies.
            </p>
            <div className="hero-cta">
              <Link href="#contact" className="btn btn-primary">
                Get Free Strategy Call
              </Link>
              <Link href="#case-studies" className="btn btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image 
              src="/wp-content/themes/um/assets/img/hero-girl.png" 
              alt="Marketing Professional" 
              width={600} 
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital marketing solutions for e-commerce success</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Image src="/wp-content/themes/um/assets/img/facebook-icon.svg" alt="Facebook Ads" width={60} height={60} />
              </div>
              <h3>Facebook & Instagram Ads</h3>
              <p>Targeted social media advertising campaigns that convert browsers into buyers</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Image src="/wp-content/themes/um/assets/img/google-icon.svg" alt="Google Ads" width={60} height={60} />
              </div>
              <h3>Google Ads Management</h3>
              <p>Search and shopping campaigns optimized for maximum ROI and conversions</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Image src="/wp-content/themes/um/assets/img/conversion-icon.svg" alt="Conversion Optimization" width={60} height={60} />
              </div>
              <h3>Conversion Rate Optimization</h3>
              <p>Data-driven website optimization to increase your conversion rates</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Image src="/wp-content/themes/um/assets/img/analytics-icon.svg" alt="Analytics" width={60} height={60} />
              </div>
              <h3>Analytics & Tracking</h3>
              <p>Comprehensive tracking setup and performance analysis for better decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Real results from real clients across various e-commerce verticals</p>
          </div>
          
          <div className="case-studies-grid">
            <div className="case-study-card">
              <div className="case-study-header">
                <span className="category">Dropshipping</span>
                <span className="platform">Meta Ads</span>
                <span className="location">United States</span>
              </div>
              <div className="case-study-content">
                <h3>Women&apos;s Underwear Store</h3>
                <p>Online store specializing in women&apos;s underwear with a focus on dropshipping model.</p>
                <div className="date-range">March 2025 - Present</div>
              </div>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="label">Budget</span>
                  <span className="value">$52,784</span>
                </div>
                <div className="metric">
                  <span className="label">Profit</span>
                  <span className="value">$115,508</span>
                </div>
                <div className="metric">
                  <span className="label">ROAS</span>
                  <span className="value highlight">219%</span>
                </div>
              </div>
              <div className="case-study-actions">
                <Link href="/blog/cases/dropshipping/" className="btn btn-outline">
                  View Full Case Study
                </Link>
              </div>
            </div>

            <div className="case-study-card">
              <div className="case-study-header">
                <span className="category">Accessories</span>
                <span className="platform">Google Ads</span>
                <span className="location">Europe</span>
              </div>
              <div className="case-study-content">
                <h3>Intimate Accessories</h3>
                <p>E-commerce store offering intimate accessories with targeted Google Ads campaigns.</p>
                <div className="date-range">November 2025 - Present</div>
              </div>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="label">Budget</span>
                  <span className="value">€52,893</span>
                </div>
                <div className="metric">
                  <span className="label">Profit</span>
                  <span className="value">€227,939</span>
                </div>
                <div className="metric">
                  <span className="label">ROAS</span>
                  <span className="value highlight">431%</span>
                </div>
              </div>
              <div className="case-study-actions">
                <Link href="/blog/cases/accessories/" className="btn btn-outline">
                  View Full Case Study
                </Link>
              </div>
            </div>

            <div className="case-study-card">
              <div className="case-study-header">
                <span className="category">Cookware</span>
                <span className="platform">Meta Ads</span>
                <span className="location">USA</span>
              </div>
              <div className="case-study-content">
                <h3>Iron Dutch Ovens</h3>
                <p>Specialized in cast iron cookware with a focus on Dutch ovens, utilizing Facebook and Instagram advertising.</p>
                <div className="date-range">November 2024 - Present</div>
              </div>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="label">Budget</span>
                  <span className="value">$7,200</span>
                </div>
                <div className="metric">
                  <span className="label">Profit</span>
                  <span className="value">$27,540</span>
                </div>
                <div className="metric">
                  <span className="label">ROAS</span>
                  <span className="value highlight">393%</span>
                </div>
              </div>
              <div className="case-study-actions">
                <Link href="/blog/cases/facebook-ads-iron-dutch-ovens/" className="btn btn-outline">
                  View Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose UM Marketing?</h2>
              <p>
                We&apos;re not just another marketing agency. We&apos;re e-commerce specialists 
                who understand the unique challenges of online retail.
              </p>
              <ul className="benefits-list">
                <li>✓ Proven track record with 394% average ROAS</li>
                <li>✓ Specialized in e-commerce marketing</li>
                <li>✓ Data-driven approach to campaign optimization</li>
                <li>✓ Transparent reporting and communication</li>
                <li>✓ Dedicated account management</li>
              </ul>
            </div>
            <div className="about-image">
              <Image 
                src="/wp-content/themes/um/assets/img/team-photo.jpg" 
                alt="UM Marketing Team" 
                width={500} 
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Scale Your Business?</h2>
            <p>Get a free strategy call and discover how we can help you achieve profitable growth</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Monthly Ad Spend" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your business and goals" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Get Free Strategy Call
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:hello@um.marketing">hello@um.marketing</a>
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong>
                <span>Within 24 hours</span>
              </div>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <Image src="/wp-content/uploads/2024/06/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Image src="/wp-content/uploads/2024/06/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Image src="/wp-content/uploads/2024/06/x.svg" alt="Twitter" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <Image src="/wp-content/themes/um/assets/img/logo.svg" alt="UM Marketing" width={120} height={40} />
              </Link>
              <p>Performance marketing agency specialized in e-commerce growth.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><Link href="#services">Facebook Ads</Link></li>
                  <li><Link href="#services">Google Ads</Link></li>
                  <li><Link href="#services">Conversion Optimization</Link></li>
                  <li><Link href="#services">Analytics</Link></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><Link href="#about">About Us</Link></li>
                  <li><Link href="#case-studies">Case Studies</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="#contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 UM Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}