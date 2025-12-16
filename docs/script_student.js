// Core logic for data handling, dynamic rendering, and filtering for Student Portal.

// 1. Data Mocking 
const facultyData = [
    { id: 101, name: "Dr. Anjali Sharma", dept: "CSE", designation: "Professor", cabin: "A-301", email: "anjali.sharma@cc.in", officeHours: "Mon, Wed: 10-12 PM" },
    { id: 102, name: "Mr. Vishal Singh", dept: "CSE", designation: "Assistant Professor", cabin: "A-305", email: "vishal.singh@cc.in", officeHours: "Tue, Thu: 2-4 PM" },
    { id: 103, name: "Ms. Neha Verma", dept: "ECE", designation: "Associate Professor", cabin: "B-201", email: "neha.verma@cc.in", officeHours: "Fri: 11-1 PM" },
    { id: 104, name: "Dr. K. S. Reddy", dept: "ME", designation: "HOD", cabin: "C-101", email: "ks.reddy@cc.in", officeHours: "Daily: 9-10 AM" }
];

const assignmentData = [
    { id: 201, course: "BCC351 (Mini Project)", name: "Final Report Submission", dueDate: "2025-12-16", status: "Pending", action: "Submit" },
    { id: 202, course: "CS302", name: "Operating System Case Study", dueDate: "2025-12-20", status: "Pending", action: "Submit" },
    { id: 203, course: "CS301", name: "Database Mid-Term Quiz", dueDate: "2025-11-01", status: "Completed", action: "View Grade" },
    { id: 204, course: "BCC351", name: "Initial Synopsis", dueDate: "2025-10-15", status: "Completed", action: "View Feedback" },
    { id: 205, course: "EC303", name: "Digital Logic Lab Report", dueDate: "2025-12-25", status: "Pending", action: "Submit" },
];

const testData = [
    { id: 301, name: "Mid-Term Exam", course: "CS302", date: "2025-12-28", timeVenue: "10:00 AM / LT-201", syllabus: "Modules 1-3" },
    { id: 302, name: "Internal Test 3", course: "BCC351", date: "2025-12-16", timeVenue: "9:00 AM / LT-301", syllabus: "Project Presentation" },
    { id: 303, name: "Quiz 1", course: "CS301", date: "2025-12-10", timeVenue: "Online", syllabus: "Chapter 4" },
];

// --- MODAL FUNCTIONS (MOVED HERE FOR EXTERNAL JS COMPLETENESS) ---

/**
 * Shows the Student Profile Modal.
 * NOTE: This function is called from the HTML elements.
 */
function showProfileMockup() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

/**
 * Hides the Student Profile Modal.
 * NOTE: This function is called from the HTML elements.
 */
function closeProfileMockup() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// -----------------------------------------------------------------


// 2. Faculty Directory Rendering Function
function renderFacultyList(data) {
    const listContainer = document.getElementById('faculty-list');
    listContainer.innerHTML = ''; 

    if (data.length === 0) {
         listContainer.innerHTML = '<p class="text-center text-gray-500 mt-4 col-span-full">No faculty matches your search or filter.</p>';
         return;
    }

    data.forEach(faculty => {
        // Dynamic generation of faculty card HTML
        const cardHTML = `
            <div class="faculty-card bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-400">
                <h3 class="text-xl font-semibold text-gray-800">${faculty.name}</h3>
                <p class="text-indigo-600 mb-2">${faculty.designation} (${faculty.dept})</p>
                <hr class="my-2">
                <div class="space-y-1 text-sm text-gray-700">
                    <p><strong>Cabin:</strong> ${faculty.cabin}</p>
                    <p><strong>Office Hours:</strong> ${faculty.officeHours}</p>
                    <p><strong>Email:</strong> <a href="mailto:${faculty.email}" class="text-blue-500 hover:underline">${faculty.email}</a></p>
                </div>
                <button class="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-150" onclick="showProfileMockup()">View Full Profile</button>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// 3. Assignment List Rendering Function
function renderAssignments(data) {
    const tableBody = document.getElementById('assignments-list');
    tableBody.innerHTML = ''; 
    let pendingCount = 0;

    data.forEach(assignment => {
        // Logic for status badge color and button style
        let statusColor = '';
        let buttonStyle = '';
        
        if (assignment.status === 'Pending') {
            statusColor = 'bg-red-100 text-red-800';
            buttonStyle = 'bg-indigo-500 hover:bg-indigo-600 text-white';
            pendingCount++;
        } else {
            statusColor = 'bg-green-100 text-green-800';
            buttonStyle = 'bg-gray-200 hover:bg-gray-300 text-gray-800';
        }

        const rowHTML = `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${assignment.course}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${assignment.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${assignment.dueDate}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                        ${assignment.status}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" onclick="alert('${assignment.action} functionality is part of future backend scope.')" class="px-3 py-1 rounded-lg text-sm transition duration-150 cursor-pointer ${buttonStyle}">
                        ${assignment.action}
                    </a>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', rowHTML);
    });
    
    // Update dashboard stat
    const pendingCountElement = document.getElementById('pending-count');
    if (pendingCountElement) {
        pendingCountElement.innerText = pendingCount;
    }
}

// 4. Test List Rendering Function
function renderTests(data) {
    const tableBody = document.getElementById('tests-list');
    tableBody.innerHTML = '';

    data.forEach(test => {
        const rowHTML = `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${test.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${test.course}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${test.date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${test.timeVenue}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <a href="#" onclick="alert('Viewing syllabus for ${test.name}')" class="text-indigo-500 hover:underline text-xs font-semibold">
                        View Syllabus
                    </a>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', rowHTML);
    });
}


// 5. Filtering and Search Logic
function setupEventListeners() {
    const searchInput = document.getElementById('faculty-search');
    const filterSelect = document.getElementById('faculty-filter');

    const handleFilter = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const department = filterSelect.value;

        const filtered = facultyData.filter(faculty => {
            const searchFields = `${faculty.name} ${faculty.designation} ${faculty.dept} ${faculty.email}`.toLowerCase();
            const matchesSearch = searchFields.includes(searchTerm);
            
            const matchesFilter = department === 'all' || faculty.dept === department;

            return matchesSearch && matchesFilter;
        });
        
        renderFacultyList(filtered);
    };

    // Event listeners for interactive filtering
    if (searchInput) searchInput.addEventListener('input', handleFilter);
    if (filterSelect) filterSelect.addEventListener('change', handleFilter);
}


// 6. Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderFacultyList(facultyData);
    renderAssignments(assignmentData);
    renderTests(testData); 
    setupEventListeners();
});