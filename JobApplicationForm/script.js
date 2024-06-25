fullname = null;
phone = null;
email = null;
street = null;
city = null;
state = null;
zipCode = null;
uploadResume = null;
coverLetter = null;
education = null;
school = null;
study = null;
graduationYear = null;
history = null;
companyName = null;
employmentDate = null;
jobRresponsibilities = null;
skill = null;
certifications = null;
startDate = null;
workSchedule = null;
relocate = null;
reference = null;
contact = null;
relation = null;
workForCompany = null;
terms = null;
policy = null;

function SubmitForm() {
    fullname = document.getElementById('full_name').value;
    phone = document.getElementById('phone').value;
    email = document.getElementById('email').value;
    street = document.getElementById('street').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    zipCode = document.getElementById('zipCode').value;
    uploadResume = document.getElementById('uploadResume').value;
    coverLetter = document.getElementById('coverLetter').value;
    education = document.getElementById('education').value;
    school = document.getElementById('school').value;
    study = document.getElementById('study').value;
    graduationYear = document.getElementById('graduationYear').value;
    history = document.getElementById('history').value;
    companyName = document.getElementById('companyName').value;
    employmentDate = document.getElementById('employmentDate').value;
    jobRresponsibilities = document.getElementById('jobRresponsibilities').value;
    skill = document.getElementById('skill').value;
    certifications = document.getElementById('certifications').value;
    startDate = document.getElementById('startDate').value;
    workSchedule = document.getElementById('workSchedule').value;
    relocate = document.getElementById('relocate').value;
    reference = document.getElementById('reference').value;
    contact = document.getElementById('contact').value;
    relation = document.getElementById('relation').value;
    workForCompany = document.getElementById('workForCompany').value;
    terms = document.getElementById('terms').value;
    policy = document.getElementById('policy').value;

    console.log(full_name, last_name, phone, email, street, city, state, zipCode, 
        uploadResume, coverLetter, education, school, study, graduationYear, history, companyName, 
        employmentDate, jobRresponsibilities, skill, certifications, startDate, workSchedule, relocate, reference, 
        contact, relation, workForCompany, terms, policy);
}

function addRow() {
    var html="";
        html="<tr><td>"+fullname+"</td><td>"+phone+"</td><td>"+email+"</td><td>"+street+
        "</td><td>"+city+"</td><td>"+state+"</td><td>"+zipCode+"</td><td>"+uploadResume+
        "</td><td>"+coverLetter+"</td><td>"+education+"</td><td>"+school+ "</td><td>"+study+
        "</td><td>"+graduationYear+"</td><td>"+history+"</td><td>"+companyName+"</td><td>"+employmentDate+
        "</td><td>"+jobRresponsibilities+"</td><td>"+skill+"</td><td>"+certifications+"</td><td>"+startDate+
        "</td><td>"+workSchedule+"</td><td>"+relocate+"</td><td>"+reference+"</td><td>"+contact+"</td><td>"
        +relation+"</td><td>"+workForCompany+"</td><td>"+terms+"</td><td>"+policy +"</td></tr>";
        document.getElementById('addData').innerHTML+=html;
        document.getElementById("infoTable").style.display = 'block';   
   
}
