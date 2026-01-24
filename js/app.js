
document.addEventListener('DOMContentLoaded', function() {
    // Populate header
    document.getElementById('owner-name').textContent = portfolio.name;
    document.getElementById('main-specialty').textContent = portfolio.main_specialty;

    // Populate about section
    document.getElementById('about-description').textContent = portfolio.description;

    // Populate projects
    const projectsContainer = document.getElementById('projects-container');
    portfolio.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="button">View Project</a>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Populate experience
    const experienceContainer = document.getElementById('experience-container');
    portfolio.experience.forEach(exp => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        experienceCard.innerHTML = `
            <h3>${exp.role}</h3>
            <h4>${exp.company} | ${exp.period}</h4>
            <p>${exp.description}</p>
        `;
        experienceContainer.appendChild(experienceCard);
    });

    // Populate contact
    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = `
        <p>Email: <a href="mailto:${portfolio.contact.email}">${portfolio.contact.email}</a></p>
        <p>LinkedIn: <a href="${portfolio.contact.linkedin}" target="_blank">${portfolio.contact.linkedin}</a></p>
        <p>GitHub: <a href="${portfolio.contact.github}" target="_blank">${portfolio.contact.github}</a></p>
    `;
});
