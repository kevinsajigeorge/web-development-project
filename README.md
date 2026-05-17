<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connect - Job & Candidate Search</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-network-wired"></i>
                <span>Connect</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#search" class="nav-link">Search</a></li>
                <li><a href="#browse" class="nav-link">Browse</a></li>
                <li><a href="#features" class="nav-link">Features</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
            </ul>
            <div class="nav-buttons">
                <button class="btn btn-login">Login</button>
                <button class="btn btn-signup">Sign Up</button>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Find Your Perfect Match</h1>
            <p>Connect skilled professionals with companies searching for talent</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="toggleSearchMode('jobs')">Search Jobs</button>
                <button class="btn btn-secondary" onclick="toggleSearchMode('candidates')">Find Candidates</button>
            </div>
        </div>
        <div class="hero-image">
            <div class="floating-card card-1">
                <i class="fas fa-briefcase"></i>
                <p>1000+ Jobs</p>
            </div>
            <div class="floating-card card-2">
                <i class="fas fa-users"></i>
                <p>5000+ Candidates</p>
            </div>
            <div class="floating-card card-3">
                <i class="fas fa-handshake"></i>
                <p>500+ Matches</p>
            </div>
        </div>
    </section>

    <!-- Main Search Section -->
    <section class="search-section" id="search">
        <div class="search-container">
            <div class="search-header">
                <h2>Advanced Search</h2>
                <div class="toggle-buttons">
                    <button class="toggle-btn active" id="jobs-toggle" onclick="toggleMode('jobs')">
                        <i class="fas fa-briefcase"></i> Search Jobs
                    </button>
                    <button class="toggle-btn" id="candidates-toggle" onclick="toggleMode('candidates')">
                        <i class="fas fa-user-tie"></i> Find Candidates
                    </button>
                </div>
            </div>

            <!-- Jobs Search Form -->
            <div id="jobs-search" class="search-form active">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="job-title">Job Title</label>
                        <input type="text" id="job-title" placeholder="e.g., Software Engineer, Designer">
                    </div>
                    <div class="form-group">
                        <label for="job-location">Location</label>
                        <input type="text" id="job-location" placeholder="City, Region, or Remote">
                    </div>
                    <div class="form-group">
                        <label for="job-category">Category</label>
                        <select id="job-category">
                            <option value="">All Categories</option>
                            <option value="tech">Technology</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                            <option value="hr">Human Resources</option>
                            <option value="finance">Finance</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="job-level">Experience Level</label>
                        <select id="job-level">
                            <option value="">All Levels</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior</option>
                            <option value="lead">Lead/Manager</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="job-salary">Salary Range</label>
                        <select id="job-salary">
                            <option value="">Any</option>
                            <option value="0-30k">$0 - $30K</option>
                            <option value="30-60k">$30K - $60K</option>
                            <option value="60-100k">$60K - $100K</option>
                            <option value="100k+">$100K+</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="job-type">Job Type</label>
                        <select id="job-type">
                            <option value="">All Types</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                            <option value="freelance">Freelance</option>
                        </select>
                    </div>
                </div>
                <div class="search-filters">
                    <label class="checkbox-label">
                        <input type="checkbox" id="remote-job">
                        <span>Remote Only</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="recently-posted">
                        <span>Recently Posted</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="featured-job">
                        <span>Featured Jobs Only</span>
                    </label>
                </div>
                <button class="btn btn-primary btn-block" onclick="searchJobs()">
                    <i class="fas fa-search"></i> Search Jobs
                </button>
            </div>

            <!-- Candidates Search Form -->
            <div id="candidates-search" class="search-form">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="candidate-name">Name</label>
                        <input type="text" id="candidate-name" placeholder="e.g., John Doe">
                    </div>
                    <div class="form-group">
                        <label for="candidate-location">Location</label>
                        <input type="text" id="candidate-location" placeholder="City, Region">
                    </div>
                    <div class="form-group">
                        <label for="candidate-skills">Skills (comma-separated)</label>
                        <input type="text" id="candidate-skills" placeholder="e.g., Python, React, AWS">
                    </div>
                    <div class="form-group">
                        <label for="candidate-role">Desired Role</label>
                        <select id="candidate-role">
                            <option value="">All Roles</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                            <option value="analyst">Analyst</option>
                            <option value="consultant">Consultant</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="candidate-experience">Years of Experience</label>
                        <select id="candidate-experience">
                            <option value="">Any</option>
                            <option value="0-2">0-2 Years</option>
                            <option value="2-5">2-5 Years</option>
                            <option value="5-10">5-10 Years</option>
                            <option value="10+">10+ Years</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="candidate-certification">Certifications</label>
                        <select id="candidate-certification">
                            <option value="">Any</option>
                            <option value="aws">AWS Certified</option>
                            <option value="gcp">GCP Certified</option>
                            <option value="azure">Azure Certified</option>
                            <option value="google">Google Analytics</option>
                        </select>
                    </div>
                </div>
                <div class="search-filters">
                    <label class="checkbox-label">
                        <input type="checkbox" id="open-to-opportunities">
                        <span>Open to Opportunities</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="has-portfolio">
                        <span>Has Portfolio</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="verified-profile">
                        <span>Verified Profile</span>
                    </label>
                </div>
                <button class="btn btn-primary btn-block" onclick="searchCandidates()">
                    <i class="fas fa-search"></i> Find Candidates
                </button>
            </div>
        </div>
    </section>

    <!-- Results Section -->
    <section class="results-section" id="browse">
        <div class="results-container">
            <div class="results-sidebar">
                <div class="filter-box">
                    <h3>Filters</h3>
                    <div class="filter-group">
                        <h4>Rating</h4>
                        <div class="rating-filter">
                            <label><input type="checkbox"> 4.5+ Stars</label>
                            <label><input type="checkbox"> 4+ Stars</label>
                            <label><input type="checkbox"> 3.5+ Stars</label>
                        </div>
                    </div>
                    <div class="filter-group">
                        <h4>Posted Date</h4>
                        <select>
                            <option>Last 24 Hours</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Anytime</option>
                        </select>
                    </div>
                    <button class="btn btn-secondary btn-block" onclick="clearFilters()">Clear Filters</button>
                </div>
            </div>

            <div class="results-main">
                <div class="results-header">
                    <h3>Search Results <span id="result-count">(0)</span></h3>
                    <div class="sort-options">
                        <select id="sort-by" onchange="sortResults()">
                            <option value="relevant">Most Relevant</option>
                            <option value="latest">Latest</option>
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>

                <div id="results-list" class="results-list">
                    <!-- Results will be populated here -->
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <p>Perform a search to see results</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" id="features">
        <div class="features-container">
            <h2>Why Choose Connect?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Advanced Filtering</h3>
                    <p>Filter by skills, experience, location, and more to find the perfect match</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Analytics & Insights</h3>
                    <p>Track your profile views, application status, and market trends</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <h3>Smart Notifications</h3>
                    <p>Get instant alerts for jobs matching your profile or candidates matching requirements</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Verified Profiles</h3>
                    <p>All profiles are verified to ensure authenticity and quality</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>Direct Messaging</h3>
                    <p>Connect directly with employers or candidates through our messaging platform</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>Rating System</h3>
                    <p>Build credibility with ratings and recommendations from the community</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
        <div class="about-container">
            <h2>About Connect</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Connect is a smart networking and recruitment platform designed to connect skilled individuals within a particular region to companies searching for talented workers.</p>
                    <p>Our mission is to reduce the gap between job seekers and companies by creating a centralized digital space where opportunities and talent meet efficiently.</p>
                    <ul class="about-list">
                        <li><i class="fas fa-check"></i> Create professional profiles and showcase your skills</li>
                        <li><i class="fas fa-check"></i> Add certifications, portfolios, and achievements</li>
                        <li><i class="fas fa-check"></i> Browse and filter candidates or jobs based on requirements</li>
                        <li><i class="fas fa-check"></i> Direct communication with potential employers or employees</li>
                        <li><i class="fas fa-check"></i> Build your professional network and community</li>
                    </ul>
                </div>
                <div class="about-stats">
                    <div class="stat-box">
                        <h3>1000+</h3>
                        <p>Active Jobs</p>
                    </div>
                    <div class="stat-box">
                        <h3>5000+</h3>
                        <p>Verified Profiles</p>
                    </div>
                    <div class="stat-box">
                        <h3>500+</h3>
                        <p>Successful Matches</p>
                    </div>
                    <div class="stat-box">
                        <h3>95%</h3>
                        <p>User Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>Connect</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>For Job Seekers</h4>
                <ul>
                    <li><a href="#">Browse Jobs</a></li>
                    <li><a href="#">Create Profile</a></li>
                    <li><a href="#">Application Guide</a></li>
                    <li><a href="#">Skill Certifications</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>For Companies</h4>
                <ul>
                    <li><a href="#">Post Job</a></li>
                    <li><a href="#">Find Talent</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Connect. All rights reserved.</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    </footer>

    <!-- Modal for Job/Candidate Details -->
    <div id="detail-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title"></h2>
                <span class="close" onclick="closeModal()">&times;</span>
            </div>
            <div class="modal-body" id="modal-body"></div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                <button class="btn btn-primary" onclick="applyOrContact()">Apply / Contact</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
