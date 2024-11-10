const form = document.getElementById("resume-form");
const generateResume = document.getElementById("generate-resume")

form?.addEventListener("submit" , (event) => {
    event.preventDefault();

    const nameElement = document.getElementById("name").value;
    const emailElement = document.getElementById("email").value;
    const phoneElement = document.getElementById("phone").value;
    const educationElement = document.getElementById("education").value;
    const skillElement = document.getElementById("skill").value;
    const experienceElement = document.getElementById("experience").value;


    const resume = `
      <h1>Resume</h1>
    <p><strong>Name:</strong><span contenteditable="true">${nameElement}</span></p>
    <p><strong>Email:</strong><span contenteditable="true">${emailElement}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true">${phoneElement}</span></p>
    <p contenteditable="true"><strong>Education:</strong> ${educationElement}</p>
    <p contenteditable="true"><strong>Skill:</strong> ${skillElement}</p>
    <p contenteditable="true"><strong>Experience:</strong> ${experienceElement}</p>
    ` 
    if(nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement){
        generateResume.innerHTML = resume
    }
    });
    