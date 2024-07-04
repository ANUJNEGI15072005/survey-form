function validateForm(form) {
    const name = form.name.value;
    const age = form.age.value;
    const standard = form.standard.value;
    const school = form.school.value;
    const radios = document.getElementsByName('schl');
    let isChecked = false;
    const boxes = document.getElementsByName('course');
    let ischeck = false;
    const email = form.email.value;
    const reason = form.reason.value;
    const ageRegex = /^\d+$/;
    const standardRegex = /^(1[0-2]|[1-9])$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      
    if (!name || !email || !age || !standard || !school || !reason) {
        alert('Please fill out all required fields');
        return false;
    }
    for(let i=0;i<radios.length;i++){
        if(radios[i].checked){
            isChecked = true;
            break;
        }    
    }
    if(!isChecked){
        alert('Please select a school type');
        return false;
    }
    for(let j=0;j<boxes.length;j++){
        if(boxes[j].checked){
            ischeck = true;
            break;
        }
    }
    if(!ischeck){
        alert('Please select a course');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (!ageRegex.test(age)) {
        alert('Please enter a valid age');
        return false;
    }
    if (!standardRegex.test(standard)) {
        alert('Please enter a valid class');
        return false;
    }    
      
    return true;
}
      
function submitForm() {
    const form = document.getElementById('myForm');
    if (!validateForm(form)) {
        return;
    }
    form.submit();
}

