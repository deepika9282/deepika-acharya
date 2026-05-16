export function downloadResume() {
  const resumeText = `Deepika Acharya
Frontend Developer & Computing Student

Email: deepika071221@gmail.com
Phone: +977-9803071323
GitHub: https://github.com/deepika9282
LinkedIn: https://www.linkedin.com/in/deepika-acharya/

Profile
Computing student focused on frontend development, UI/UX-sensitive interfaces, and practical web applications.

Core Skills
HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Java, Python, SQL, Git, GitHub, Teamwork, Problem Solving, Communication

Selected Projects
- Saral Sewa
- Dello
- Art Gallery Management
- Stock Management
- Know Your Potential
`;

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Deepika_Acharya_CV.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}