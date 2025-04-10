// Global variables
let allCourses = [...courses];
let filteredCourses = [...courses];
let activeFilters = {
    categories: [],
    sources: []
};
let fuseSearch;

// DOM elements
const searchInput = document.getElementById('search');
const coursesGrid = document.getElementById('courses-grid');
const noResults = document.getElementById('no-results');
const filterButton = document.getElementById('filter-button');
const filterDropdown = document.querySelector('.filter-dropdown');
const categoryFiltersContainer = document.getElementById('category-filters');
const sourceFiltersContainer = document.getElementById('source-filters');
const resetSearchButton = document.getElementById('reset-search');
const courseCountElement = document.getElementById('course-count');
const universityCountElement = document.getElementById('university-count');
const categoryCountElement = document.getElementById('category-count');
const modal = document.getElementById('course-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Initialize the application
function init() {
    // Initialize Fuse.js for search
    fuseSearch = new Fuse(allCourses, {
        keys: ['title', 'provider', 'category', 'description'],
        threshold: 0.3,
        includeScore: true
    });

    // Populate stats
    updateStats();

    // Populate filters
    populateFilters();

    // Render initial courses
    renderCourses(allCourses);

    // Set up event listeners
    setupEventListeners();
}

// Update statistics counts
function updateStats() {
    courseCountElement.textContent = allCourses.length;
    
    // Count unique universities
    const universities = new Set();
    allCourses.forEach(course => {
        const provider = course.provider.split(',')[0].trim();
        if (provider.includes('University') || 
            provider.includes('MIT') || 
            provider.includes('Stanford') || 
            provider.includes('Harvard') || 
            provider.includes('Princeton') ||
            provider.includes('IIT') ||
            provider.includes('UC')) {
            universities.add(provider);
        }
    });
    universityCountElement.textContent = universities.size;
    
    // Count unique categories
    const categories = new Set();
    allCourses.forEach(course => {
        categories.add(course.category);
    });
    categoryCountElement.textContent = categories.size;
}

// Populate filter options
function populateFilters() {
    // Extract unique categories and sources
    const categories = [...new Set(allCourses.map(course => course.category))].sort();
    const sources = [...new Set(allCourses.map(course => {
        // Extract institution name from provider
        const providerParts = course.provider.split(',');
        return providerParts[providerParts.length - 1].trim();
    }))].sort();

    // Populate category filters
    categories.forEach(category => {
        const filterOption = createFilterOption('category', category);
        categoryFiltersContainer.appendChild(filterOption);
    });

    // Populate source filters
    sources.forEach(source => {
        const filterOption = createFilterOption('source', source);
        sourceFiltersContainer.appendChild(filterOption);
    });
}

// Create a filter option element
function createFilterOption(type, value) {
    const div = document.createElement('div');
    div.className = 'filter-option';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${type}-${value.replace(/\s+/g, '-').toLowerCase()}`;
    checkbox.value = value;
    checkbox.dataset.filterType = type;
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = value;
    
    div.appendChild(checkbox);
    div.appendChild(label);
    
    return div;
}

// Set up event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', handleSearch);
    
    // Filter button
    filterButton.addEventListener('click', toggleFilterDropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
            filterDropdown.classList.remove('show');
        }
    });
    
    // Filter checkboxes
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Reset search button
    resetSearchButton.addEventListener('click', resetSearch);
    
    // Modal close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Toggle filter dropdown
function toggleFilterDropdown() {
    filterDropdown.classList.toggle('show');
}

// Handle search input
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (query === '') {
        // If no search query, just apply filters to all courses
        applyFilters();
    } else {
        // Search using Fuse.js
        const searchResults = fuseSearch.search(query);
        
        // Extract the items from search results
        let searchedCourses = searchResults.map(result => result.item);
        
        // Apply any active filters to search results
        applyFilters(searchedCourses);
    }
}

// Handle filter checkbox changes
function handleFilterChange(e) {
    const checkbox = e.target;
    const filterType = checkbox.dataset.filterType;
    const filterValue = checkbox.value;
    
    if (checkbox.checked) {
        // Add filter
        if (filterType === 'category') {
            activeFilters.categories.push(filterValue);
        } else if (filterType === 'source') {
            activeFilters.sources.push(filterValue);
        }
    } else {
        // Remove filter
        if (filterType === 'category') {
            activeFilters.categories = activeFilters.categories.filter(c => c !== filterValue);
        } else if (filterType === 'source') {
            activeFilters.sources = activeFilters.sources.filter(s => s !== filterValue);
        }
    }
    
    // Apply filters
    applyFilters();
}

// Apply active filters to courses
function applyFilters(coursesToFilter = allCourses) {
    let results = [...coursesToFilter];
    
    // Apply category filters
    if (activeFilters.categories.length > 0) {
        results = results.filter(course => 
            activeFilters.categories.includes(course.category)
        );
    }
    
    // Apply source filters
    if (activeFilters.sources.length > 0) {
        results = results.filter(course => {
            const providerParts = course.provider.split(',');
            const source = providerParts[providerParts.length - 1].trim();
            return activeFilters.sources.includes(source);
        });
    }
    
    // Update filtered courses and render
    filteredCourses = results;
    renderCourses(filteredCourses);
}

// Render courses to the grid
function renderCourses(coursesToRender) {
    // Clear current courses
    coursesGrid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        // Show no results message
        noResults.classList.remove('hidden');
        return;
    }
    
    // Hide no results message
    noResults.classList.add('hidden');
    
    // Render each course
    coursesToRender.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

// Create a course card element
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.dataset.courseId = course.id;
    
    const content = document.createElement('div');
    content.className = 'course-content';
    
    const title = document.createElement('h2');
    title.className = 'course-title';
    title.textContent = course.title;
    
    const provider = document.createElement('div');
    provider.className = 'course-provider';
    provider.innerHTML = `<span class="provider-name">${course.provider}</span>`;
    
    const tags = document.createElement('div');
    tags.className = 'course-tags';
    
    const categoryTag = document.createElement('span');
    categoryTag.className = 'tag category';
    categoryTag.textContent = course.category;
    
    const formatTag = document.createElement('span');
    formatTag.className = 'tag format';
    formatTag.textContent = course.format;
    
    tags.appendChild(categoryTag);
    tags.appendChild(formatTag);
    
    const viewButton = document.createElement('button');
    viewButton.className = 'button view-button';
    viewButton.textContent = 'View Details';
    viewButton.addEventListener('click', () => showCourseDetails(course));
    
    content.appendChild(title);
    content.appendChild(provider);
    content.appendChild(tags);
    content.appendChild(viewButton);
    
    card.appendChild(content);
    
    return card;
}

// Show course details in modal
function showCourseDetails(course) {
    // Populate modal content
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${course.title}</h2>
            <div class="modal-provider">${course.provider}</div>
            <div class="modal-tags">
                <span class="tag category">${course.category}</span>
                <span class="tag format">${course.format}</span>
            </div>
        </div>
        <div class="modal-description">
            <p>${course.description}</p>
        </div>
        <div class="modal-links">
            ${course.links.map(link => `
                <a href="${link.url}" target="_blank" class="button modal-link">
                    ${getLinkText(link.type)}
                </a>
            `).join('')}
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
}

// Get link text based on type
function getLinkText(type) {
    switch (type) {
        case 'video': return 'Watch Video';
        case 'course': return 'Go to Course';
        case 'itunes': return 'iTunes Video';
        case 'materials': return 'Course Materials';
        case 'download': return 'Download Video';
        case 'info': return 'Course Info';
        case 'course_info': return 'Course Info';
        default: return 'View Resource';
    }
}

// Reset search and filters
function resetSearch() {
    // Clear search input
    searchInput.value = '';
    
    // Clear all filter checkboxes
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset active filters
    activeFilters = {
        categories: [],
        sources: []
    };
    
    // Reset filtered courses
    filteredCourses = [...allCourses];
    
    // Render all courses
    renderCourses(allCourses);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

