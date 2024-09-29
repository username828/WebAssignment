document.getElementById('Form').addEventListener('submit',  (event) => {
    event.preventDefault();    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const terms = document.getElementById('terms').checked;
    const privacy = document.getElementById('privacy').checked;
  
    if (!validateEmail(email)) {
      alert('Invalid email format.');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }
    if (!terms || !privacy) {
      alert('Please agree to the terms and privacy policy.');
      return;
    }
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = firstName + ' ' + lastName;
    
    const coverLetter = document.getElementById('coverLetter').value;
    const resume = document.getElementById('resume').files[0]?.name;
    
    console.log({ fullName, coverLetter, resume });
  
  
    //table form
    const table = document.querySelector('#appTable tbody');
    const tablerow = document.createElement('tr');
    tablerow.innerHTML = `<td>${fullName}</td> <td>${email}</td><td>${phone}</td><td>${resume}</td><td>${coverLetter}</td>`;
    table.appendChild(tablerow);

    document.getElementById('Form').reset();
});
  
//show applications table upon submission
document.getElementById('viewApplications').addEventListener('click', (event) => {
  event.preventDefault();
  const applicationsTable = document.getElementById('divTable');
  // Toggle
  if (applicationsTable.style.display === 'none' || applicationsTable.style.display === '') {
    applicationsTable.style.display = 'block';
  } 
  else {
    applicationsTable.style.display = 'none';
  }
});
  
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
  
function validatePhone(phone) {
  const regex=/^\d{10}$/;
  return regex.test(phone);
}
  