var bio = {
  "name" : "Rodrigo Montebello Saboya Brito",
  "role" : "Desenvolvedor web",
  "contacts" : {
    "mobile" : "+5519991944298",
    "email" : "blackknight@blackknightstudio.com.br",
    "github" : "BlackKnightBR",
    "location" : "Mococa-SP"
  },
  "welcomeMessage" : "Para que tudo se transforme em arte, basta um toque da sua alma.",
  "skills" : ["Ciêntista da computação ", "Programador ", "Agente de marketing digital ", "Designer ", "Desenhista ", "Musico ", "Autodidata " , "Artista."],
  "bioPic" : "images/RodrigoMSB.jpg"
}

var education = {
"schools": [{
  "name": "Fundação de Ensino de Mococa ",
  "city": "Mococa-SP ",
  "graduation": "Ensino médio ",
  "years": "Finalizado em 2009. ",
  "url": "http://www.funvic.org.br/ "
}, {
  "name": "Universidade federal de Alfenas ",
  "city": "Alfenas-MG ",
  "graduation": "Superior Incompleto ",
  "years": "2016 ",
  "url": "http://www.unifal-mg.edu.br "
}],
"onlineCourses" :[
  {
    "title" : "FrontEnd Developer ",
    "school" : "Udacity ",
    "dates" : "2017 ",
    "url" : "http://www.udacity.com/ "
  }
]}

var work = {
  "jobs" : [
    {
      "employer" : "Brisa Indústria de Doces ",
      "title" : "Office Boy ",
      "dates" : "05/12/2008-02/03/2009. ",
      "location" : "Mococa-SP",
      "description" : "Cuidar de todo tipo de papelada relativo a escritório e pagamento de funcionários. ",
    },
    {
      "employer" : "CEAD Unifal Alfenas-MG ",
      "title" : "Full Stack Web Developer ",
      "dates" : "02/02/2014-09/01/2015. ",
      "location" : "Alfenas-MG",
      "description" : "Estágio em desenvolvimento web dentro da Universidade federal de Alfenas para desenvolvimento do sistema de controle e organização para tutores e administradores do centro de educação a distância. Prêmio de terceiro lugar INPEAU - UFSC. ",
    },
    {
      "employer" : "Emancipa Sul de Minas ",
      "title" : "Professor e Coordenador ",
      "dates" : "1/01/2015-20/11/2016 ",
      "location" : "Alfenas-MG",
      "description" : "Professor voluntário de Matemática para o ensino médio com finalidade de auxiliar os alunos para prestar especificamente a prova do exame nacional do ensino médio (ENEM). Participou da equipe de Coordenação voluntária realizando funções de logística e rodas de discussão e aperfeiçoamento pessoal para os alunos e para si mesmo. ",
    },
    {
      "employer" : "Proprietário (MEI) BKS-BR",
      "title" : "Software Developer, Full Stack Web Developer, Agente de Marketing Digital.",
      "dates" : "1/01/2015-20/11/2016",
      "location" : "Mococa-SP",
      "description" : "Empreendimento e desenvolvimento de todas as atividades relacionadas à logística da empresa. Desenvolve os sites dos clientes da empresa e realiza as atividades de Marketing Digital e promoção de vendas para seus clientes. Desenvolvedor de soluções e softwares empresariais.",
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Terceiro lugar no Prêmio Nacional de Inovação na Gestão Universitária.",
      "dates" : "2014",
      "description" : "Terceiro lugar no Prêmio Nacional de Inovação na Gestão Universitária Professor João David Ferreira Lima 2014 pela Universidade Federal de santa Catarina – UFSC. Junto à equipe Centro de Educação à distância (CEAD) – Unifal.",
      "images" : ["images/CertificadoINPEAU.jpg"]
    }
  ]
}

//Área destina par as funções de display;

var displayBio = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedBioImage = HTMLbioPic.replace("%data%",bio.bioPic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGit);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedMessage);


  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++ ){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }

  $("#header").append(formattedBioImage);
}

var displayEducation = function(){
  $("#education").append(HTMLschoolStart);

  for(school in education.schools){
    var formateddSchool;
    var formattedSName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSGraduation = HTMLschoolDegree.replace("%data%",education.schools[school].graduation);
    formattedSchool = formattedSName + formattedSGraduation;
    var formattedSCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
    var formattedSYears = HTMLschoolDates.replace("%data%",education.schools[school].years);
    var formattedSUrl = HTMLschoolURL.replace("%data%",education.schools[school].url);

    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedSCity);
    $(".education-entry:last").append(formattedSYears);
    $(".education-entry:last").append(formattedSUrl);
  }

  $("#online").append(HTMLonlineStart);

  for(online in education.onlineCourses){
    var formattedOnlineCourse;
    var formattadeOTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
    var formattadeOSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
    formattedOnlineCourse = formattadeOTitle + formattadeOSchool;
    var formattadeODate = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
    var formattadeOURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);

    $(".online-entry:last").append(formattedOnlineCourse);
    $(".online-entry:last").append(formattadeODate);
    $(".online-entry:last").append(formattadeOURL);
  }
}

var displayWork = function(){
  $("#workExperience").append(HTMLworkStart);

  for(job in work.jobs){
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}

var displayProjects = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

displayBio();
displayEducation();
displayWork();
displayProjects();
