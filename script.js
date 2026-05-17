// Sample Data
const jobsData = [
    {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        type: 'full-time',
        category: 'tech',
        salary: '100k+',
        level: 'senior',
        description: 'We are looking for an experienced software engineer to lead our backend team.',
        skills: ['Python', 'AWS', 'Docker', 'PostgreSQL'],
        rating: 4.8,
        reviews: 245,
        remote: true,
        posted: '2 days ago',
        featured: true
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        company: 'Design Studio',
        location: 'New York, NY',
        type: 'full-time',
        category: 'design',
        salary: '60-100k',
        level: 'mid',
        description: 'Creative designer needed for mobile and web applications.',
        skills: ['Figma', 'UI Design', 'Prototyping', 'UX Research'],
        rating: 4.6,
        reviews: 189,
        remote: false,
        posted: '1 week ago',
        featured: false
    },
    {
        id: 3,
        title: 'Digital Marketing Manager',
        company: 'Marketing Pro',
        location: 'Remote',
        type: 'full-time',
        category: 'marketing',
        salary: '60-100k',
        level: 'mid',
        description: 'Lead our digital marketing strategy and team.',
        skills: ['SEO', 'SEM', 'Analytics', 'Content Strategy'],
        rating: 4.5,
        reviews: 156,
        remote: true,
        posted: '3 days ago',
        featured: true
    },
    {
        id: 4,
        title: 'Data Analyst',
        company: 'Analytics Inc',
        location: 'Boston, MA',
        type: 'full-time',
        category: 'tech',
        salary: '60-100k',
        level: 'entry',
        description: 'Join our data team and help drive business insights.',
        skills: ['SQL', 'Python', 'Tableau', 'Excel'],
        rating: 4.4,
        reviews: 123,
        remote: true,
        posted: '5 days ago',
        featured: false
    },
    {
        id: 5,
        title: 'Sales Executive',
        company: 'Sales Force',
        location: 'Chicago, IL',
        type: 'full-time',
        category: 'sales',
        salary: '30-60k',
        level: 'entry',
        description: 'Dynamic sales role with high earning potential.',
        skills: ['Salesforce', 'Communication', 'Negotiation'],
        rating: 4.3,
        reviews: 98,
        remote: false,
        posted: '1 day ago',
        featured: true
    }
];

const candidatesData = [
    {
        id: 101,
        name: 'Alice Johnson',
        location: 'San Francisco, CA',
        title: 'Senior Full Stack Developer',
        experience: '10+',
        skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
        certifications: ['AWS Certified', 'Google Analytics'],
        rating: 4.9,
        reviews: 67,
        open: true,
        hasPortfolio: true,
        verified: true,
        image: '👩‍💻'
    },
    {
        id: 102,
        name: 'Bob Smith',
        location: 'New York, NY',
        title: 'UI/UX Designer',
        experience: '5-10',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        certifications: [],
        rating: 4.7,
        reviews: 45,
        open: true,
        hasPortfolio: true,
        verified: true,
        image: '👨‍🎨'
    },
    {
        id: 103,
        name: 'Carol White',
        location: 'Remote',
        title: 'Marketing Strategist',
        experience: '5-10',
        skills: ['SEO', 'Content Marketing', 'Analytics', 'Social Media'],
        certifications: ['Google Analytics'],
        rating: 4.6,
        reviews: 34,
        open: true,
        hasPortfolio: true,
        verified: true,
        image: '👩‍💼'
    },
    {
        id: 104,
        name: 'David Lee',
        location: 'Boston, MA',
        title: 'Data Scientist',
        experience: '2-5',
        skills: ['Python', 'SQL', 'Machine Learning', 'Tableau'],
        certifications: ['Azure Certified'],
        rating: 4.5,
        reviews: 28,
        open: false,
        hasPortfolio: true,
        verified: true,
        image: '👨‍💻'
    },
    {
        id: 105,
        name: 'Emma Davis',
        location: 'Chicago, IL',
        title: 'Product Manager',
        experience: '10+',
        skills: ['Product Strategy', 'Analytics', 'Leadership', 'Agile'],
        certifications: [],
        rating: 4.8,
        reviews: 52,
        open: true,
        hasPortfolio: true,
        verified: true,
        image: '👩‍💼'
    }
];

let currentSearchType = 'jobs';
let currentResults = [];

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupSmoothScroll();
});

// Navigation Setup
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.getElementById('hamburger');
    navMenu?.classList.toggle('active');
    hamburger?.classList.toggle('active');
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Toggle Search Mode
function toggleMode(mode) {
    currentSearchType = mode;
    
    document.getElementById('jobs-search').classList.remove('active');
    document.getElementById('candidates-search').classList.remove('active');
    document.getElementById('jobs-toggle').classList.remove('active');
    document.getElementById('candidates-toggle').classList.remove('active');

    if (mode === 'jobs') {
        document.getElementById('jobs-search').classList.add('active');
        document.getElementById('jobs-toggle').classList.add('active');
    } else {
        document.getElementById('candidates-search').classList.add('active');
        document.getElementById('candidates-toggle').classList.add('active');
    }
}

function toggleSearchMode(mode) {
    toggleMode(mode);
    document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
}

// Search Functions
function searchJobs() {
    const title = document.getElementById('job-title').value.toLowerCase();
    const location = document.getElementById('job-location').value.toLowerCase();
    const category = document.getElementById('job-category').value;
    const level = document.getElementById('job-level').value;
    const salary = document.getElementById('job-salary').value;
    const type = document.getElementById('job-type').value;
    const remote = document.getElementById('remote-job').checked;
    const recentlyPosted = document.getElementById('recently-posted').checked;
    const featured = document.getElementById('featured-job').checked;

    currentResults = jobsData.filter(job => {
        return (
            (!title || job.title.toLowerCase().includes(title)) &&
            (!location || job.location.toLowerCase().includes(location) || (remote && job.remote)) &&
            (!category || job.category === category) &&
            (!level || job.level === level) &&
            (!salary || job.salary === salary) &&
            (!type || job.type === type) &&
            (!remote || job.remote) &&
            (!featured || job.featured)
        );
    });

    displayResults(currentResults);
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
}

function searchCandidates() {
    const name = document.getElementById('candidate-name').value.toLowerCase();
    const location = document.getElementById('candidate-location').value.toLowerCase();
    const skills = document.getElementById('candidate-skills').value.toLowerCase();
    const role = document.getElementById('candidate-role').value;
    const experience = document.getElementById('candidate-experience').value;
    const certification = document.getElementById('candidate-certification').value;
    const open = document.getElementById('open-to-opportunities').checked;
    const portfolio = document.getElementById('has-portfolio').checked;
    const verified = document.getElementById('verified-profile').checked;

    currentResults = candidatesData.filter(candidate => {
        const candidateSkills = candidate.skills.join(', ').toLowerCase();
        return (
            (!name || candidate.name.toLowerCase().includes(name)) &&
            (!location || candidate.location.toLowerCase().includes(location)) &&
            (!skills || candidateSkills.includes(skills)) &&
            (!role || candidate.title.toLowerCase().includes(role)) &&
            (!experience || candidate.experience === experience) &&
            (!certification || candidate.certifications.includes(certification)) &&
            (!open || candidate.open) &&
            (!portfolio || candidate.hasPortfolio) &&
            (!verified || candidate.verified)
        );
    });

    displayResults(currentResults);
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
}

// Display Results
function displayResults(results) {
    const resultsList = document.getElementById('results-list');
    const resultCount = document.getElementById('result-count');

    resultCount.textContent = `(${results.length})`;

    if (results.length === 0) {
        resultsList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No results found. Try adjusting your search criteria.</p>
            </div>
        `;
        return;
    }

    resultsList.innerHTML = results.map(result => {
        if (currentSearchType === 'jobs') {
            return createJobCard(result);
        } else {
            return createCandidateCard(result);
        }
    }).join('');
}

function createJobCard(job) {
    const starRating = '★'.repeat(Math.floor(job.rating)) + '☆'.repeat(5 - Math.floor(job.rating));
    return `
        <div class="result-card" onclick="openJobModal(${job.id})">
            <div class="result-header">
                <div class="result-title">
                    <h4>${job.title}</h4>
                    <div class="result-meta">
                        <span><i class="fas fa-building"></i> ${job.company}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                        <span><i class="fas fa-clock"></i> ${job.posted}</span>
                    </div>
                </div>
                <div class="result-rating">
                    <span class="stars">${starRating}</span>
                    <span>${job.rating} (${job.reviews})</span>
                </div>
            </div>
            <p class="result-description">${job.description}</p>
            <div class="result-tags">
                ${job.skills.map(skill => `<span class="tag skill">${skill}</span>`).join('')}
                <span class="tag">${job.type}</span>
                <span class="tag">${job.salary}</span>
                ${job.remote ? '<span class="tag"><i class="fas fa-globe"></i> Remote</span>' : ''}
            </div>
            <div class="result-footer">
                <span style="color: #10b981; font-weight: 600;">${job.salary}</span>
                <button class="btn btn-primary" onclick="event.stopPropagation();">View Details</button>
            </div>
        </div>
    `;
}

function createCandidateCard(candidate) {
    const starRating = '★'.repeat(Math.floor(candidate.rating)) + '☆'.repeat(5 - Math.floor(candidate.rating));
    return `
        <div class="result-card" onclick="openCandidateModal(${candidate.id})">
            <div class="result-header">
                <div class="result-title">
                    <h4>${candidate.image} ${candidate.name}</h4>
                    <div class="result-meta">
                        <span><i class="fas fa-briefcase"></i> ${candidate.title}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${candidate.location}</span>
                        <span><i class="fas fa-clock"></i> ${candidate.experience} years</span>
                    </div>
                </div>
                <div class="result-rating">
                    <span class="stars">${starRating}</span>
                    <span>${candidate.rating} (${candidate.reviews})</span>
                </div>
            </div>
            <div class="result-tags">
                ${candidate.skills.map(skill => `<span class="tag skill">${skill}</span>`).join('')}
                ${candidate.certifications.map(cert => `<span class="tag"><i class="fas fa-certificate"></i> ${cert}</span>`).join('')}
            </div>
            <div class="result-footer">
                ${candidate.open ? '<span style="color: #10b981; font-weight: 600;">Open to Opportunities</span>' : '<span style="color: #ef4444; font-weight: 600;">Not Available</span>'}
                <button class="btn btn-primary" onclick="event.stopPropagation();">View Profile</button>
            </div>
        </div>
    `;
}

// Modal Functions
function openJobModal(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('detail-modal');
    document.getElementById('modal-title').textContent = job.title;
    document.getElementById('modal-body').innerHTML = `
        <div>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Level:</strong> ${job.level}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Required Skills:</strong></p>
            <div class="result-tags">
                ${job.skills.map(skill => `<span class="tag skill">${skill}</span>`).join('')}
            </div>
            <p><strong>Rating:</strong> ${job.rating}/5 (${job.reviews} reviews)</p>
        </div>
    `;
    modal.classList.add('active');
}

function openCandidateModal(candidateId) {
    const candidate = candidatesData.find(c => c.id === candidateId);
    if (!candidate) return;

    const modal = document.getElementById('detail-modal');
    document.getElementById('modal-title').textContent = candidate.name;
    document.getElementById('modal-body').innerHTML = `
        <div>
            <p><strong>Title:</strong> ${candidate.title}</p>
            <p><strong>Location:</strong> ${candidate.location}</p>
            <p><strong>Experience:</strong> ${candidate.experience} years</p>
            <p><strong>Skills:</strong></p>
            <div class="result-tags">
                ${candidate.skills.map(skill => `<span class="tag skill">${skill}</span>`).join('')}
            </div>
            ${candidate.certifications.length > 0 ? `
                <p><strong>Certifications:</strong></p>
                <div class="result-tags">
                    ${candidate.certifications.map(cert => `<span class="tag"><i class="fas fa-certificate"></i> ${cert}</span>`).join('')}
                </div>
            ` : ''}
            <p><strong>Rating:</strong> ${candidate.rating}/5 (${candidate.reviews} reviews)</p>
            <p><strong>Status:</strong> ${candidate.open ? 'Open to Opportunities' : 'Not Available'}</p>
            ${candidate.hasPortfolio ? '<p><i class="fas fa-check"></i> Portfolio Available</p>' : ''}
            ${candidate.verified ? '<p><i class="fas fa-check"></i> Verified Profile</p>' : ''}
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

function applyOrContact() {
    alert('Application/Contact feature coming soon!');
    closeModal();
}

// Sorting and Filtering
function sortResults() {
    const sortBy = document.getElementById('sort-by').value;
    let sorted = [...currentResults];

    switch(sortBy) {
        case 'latest':
            // For jobs: by posted date, for candidates: by recently active
            if (currentSearchType === 'jobs') {
                sorted.sort((a, b) => {
                    const dateA = a.posted || 'unknown';
                    const dateB = b.posted || 'unknown';
                    return dateA.localeCompare(dateB);
                });
            }
            break;
        case 'popular':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'relevant':
        default:
            // Default order
            break;
    }

    displayResults(sorted);
}

function clearFilters() {
    if (currentSearchType === 'jobs') {
        document.getElementById('job-title').value = '';
        document.getElementById('job-location').value = '';
        document.getElementById('job-category').value = '';
        document.getElementById('job-level').value = '';
        document.getElementById('job-salary').value = '';
        document.getElementById('job-type').value = '';
        document.getElementById('remote-job').checked = false;
        document.getElementById('recently-posted').checked = false;
        document.getElementById('featured-job').checked = false;
    } else {
        document.getElementById('candidate-name').value = '';
        document.getElementById('candidate-location').value = '';
        document.getElementById('candidate-skills').value = '';
        document.getElementById('candidate-role').value = '';
        document.getElementById('candidate-experience').value = '';
        document.getElementById('candidate-certification').value = '';
        document.getElementById('open-to-opportunities').checked = false;
        document.getElementById('has-portfolio').checked = false;
        document.getElementById('verified-profile').checked = false;
    }

    document.getElementById('results-list').innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <p>Perform a search to see results</p>
        </div>
    `;
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('detail-modal');
    if (event.target === modal) {
        closeModal();
    }
});
