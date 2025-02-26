// script.js
let jobs = [];

document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const jobTitle = document.getElementById('jobTitle').value;
  const jobDescription = document.getElementById('jobDescription').value;
  const jobLocation = document.getElementById('jobLocation').value;

  const job = {
    title: jobTitle,
    description: jobDescription,
    location: jobLocation,
  };

  jobs.push(job);
  displayJobs();
  document.getElementById('jobForm').reset();
});

function displayJobs(filteredJobs = jobs) {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';

  filteredJobs.forEach((job, index) => {
    const jobItem = document.createElement('div');
    jobItem.classList.add('job-item');
    jobItem.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <button onclick="applyForJob(${index})">Apply</button>
    `;
    jobList.appendChild(jobItem);
  });
}

function searchJobs() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
  );
  displayJobs(filteredJobs);
}

function applyForJob(index) {
  alert(You applied for: ${jobs[index].title});
}