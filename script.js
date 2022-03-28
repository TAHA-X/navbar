/* navbar */
function show_bar(){
    document.getElementById("ul1").style.right = "0%";
    document.getElementById("hide_ul").style.display = "block";
    document.getElementById("hide_ul").style.zIndex = "6";
};
function hide_bar(){
    document.getElementById("ul1").style.right = "-50%";
    document.getElementById("hide_ul").style.display = "none";
    document.getElementById("hide_ul").style.zIndex = "6";
};
/* email subscribe form*/
function apear_email(){
    document.getElementById("show_email").style.display = "flex";
    document.getElementById("hide_email_form").style.display = "block";
    document.getElementById("contact_form").style.display = "none";
    document.getElementById("hide_contact_form").style.display = "none";
}
function hide_email_form(){
    document.getElementById("show_email").style.display = "none";
    document.getElementById("hide_email_form").style.display = "none";
}
/* contact form */
function show_contact_form(){
    document.getElementById("contact_form").style.display = "flex";
    document.getElementById("hide_contact_form").style.display = "block";
    document.getElementById("show_email").style.display = "none";
    document.getElementById("hide_email_form").style.display = "none";
}
function hide_contact_form(){
    document.getElementById("contact_form").style.display = "none";
    document.getElementById("hide_contact_form").style.display = "none";
}
