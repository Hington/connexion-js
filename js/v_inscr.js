function saisie(txt_defaut,nom_controle)
{
  if (document.getElementById(nom_controle).value ==txt_defaut) {
    document.getElementById(nom_controle).value ='';
  }
}

function retablir(txt_defaut,nom_controle)
{
  if (document.getElementById(nom_controle).value =='') {
    document.getElementById(nom_controle).value =txt_defaut;
  }
}

function mev(txt_defaut,nom_controle)
{
let longueur = document.getElementById(nom_controle).value.length;
if (nom_controle=="date_n") {
  if (!isValidDate(document.getElementById(nom_controle).value, "DMY")) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "votre date de naissance doit etre de la forme jj/mm/aaaa";
    b_date=false;
  } else {
    document.getElementById("message").innerText = " "
    document.getElementById(nom_controle).style.border= '#333 1px solid';
    b_date =true;
  }
}
else if (nom_controle=="mail_inscr") {
  if (document.getElementById(nom_controle).value.indexOf("@")==-1 || document.getElementById(nom_controle).value.indexOf(".")==-1 ) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "votre mail ne semble pas correct ";
    b_mail=false;
  }else {
    document.getElementById("message").innerText = " "
    document.getElementById(nom_controle).style.border= '#333 1px solid';
  }
}
else if (nom_controle=="cmail_inscr") {
  if (document.getElementById(nom_controle).value.indexOf("@")==-1 || document.getElementById(nom_controle).value.indexOf(".")==-1 ) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "votre confirmation ne semble pas correcte ";
    b_mail=false;
  }
  else if (document.getElementById(nom_controle).value!=document.getElementById("mail_inscr").value) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "les deux mail ne correespondent pas ";
    b_mail=false;
  }
  else {
    document.getElementById("message").innerText = " "
    document.getElementById(nom_controle).style.border= '#333 1px solid';
    b_mail = true;
  }
}
else if (nom_controle=="mp_inscr") {
  if (document.getElementById(nom_controle).value.length<5 || document.getElementById(nom_controle).value.length>10) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "le mot de passe doit comporté entre 5 et 10 caractères ";
    b_mp=false;
  }
  else{
    document.getElementById("message").innerText = " "
    document.getElementById(nom_controle).style.border= '#333 1px solid';
  }
}
else if (nom_controle=="mp_conf") {
  if (document.getElementById(nom_controle).value!=document.getElementById("mp_inscr").value) {
    document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
    document.getElementById("message").innerText = "les deux mot de passe ne correespondent pas ";
    b_mp=false;
  }
  else{
    document.getElementById("message").innerText = " "
    document.getElementById(nom_controle).style.border= '#333 1px solid';
    b_mp=true;
  }
}

else if (longueur < 4 || document.getElementById(nom_controle).value == txt_defaut) {
  document.getElementById(nom_controle).style.border= '#cc3300 2px solid';
  switch (nom_controle) {
    case "nom":
      b_nom =false;
      break;
    case "prenom":
      b_prenom =false;
      break;
    case "mail_inscr":
      b_mail =false;
      break;
    case "date_n":
      b_date =false;
      break;
    case "mp_inscr":
      b_mp =false;
      break;
  }
} else{
  document.getElementById(nom_controle).style.border= '#333 1px solid';
  switch (nom_controle) {
    case "nom":
      b_nom =true;
      break;
    case "prenom":
      b_prenom =true;
      break;
  }
}
}

function isValidDate(dateStr, format) {
  if (format == null) { format = "MDY"; }
  format = format.toUpperCase();
  if (format.length != 3) { format = "MDY"; }
  if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1) ) { format = "MDY"; }
  if (format.substring(0, 1) == "Y") { 
	 var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
	 var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
  } else if (format.substring(1, 2) == "Y") { 
	 var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
	 var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
  } else { 
	 var reg1 = /^\d{1,2}(\/)\d{1,2}\1\d{2}$/
	 var reg2 = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/
  }
  
  if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) { return false; }
  var parts = dateStr.split(RegExp.$1); 
  
  if (format.substring(0, 1) == "M") { var mm = parts[0]; } else
	 if (format.substring(1, 2) == "M") { var mm = parts[1]; } else { var mm = parts[2]; }
  if (format.substring(0, 1) == "D") { var dd = parts[0]; } else
	 if (format.substring(1, 2) == "D") { var dd = parts[1]; } else { var dd = parts[2]; }
  if (format.substring(0, 1) == "Y") { var yy = parts[0]; } else
	 if (format.substring(1, 2) == "Y") { var yy = parts[1]; } else { var yy = parts[2]; }
  if (parseFloat(yy) <= 50) { yy = (parseFloat(yy) + 2000).toString(); }
  if (parseFloat(yy) <= 99) { yy = (parseFloat(yy) + 1900).toString(); }
  var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
  if (parseFloat(dd) != dt.getDate()) { return false; }
  if (parseFloat(mm)-1 != dt.getMonth()) { return false; }
  return true;
}