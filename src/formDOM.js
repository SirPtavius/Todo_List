function createForm() {
  // Seleziona l'elemento div in cui desideri inserire il codice HTML
  const divElement = document.querySelector(".info.blurred-box");

  // Svuota l'elemento div per prevenire duplicazioni
  divElement.innerHTML = "";

  // Crea l'elemento form
  const form = document.createElement("form");
  form.setAttribute("action", "");

  // Crea l'input per il nome
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Task Name");
  inputName.classList.add("input-box");

  // Crea il textarea per la descrizione
  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("placeholder", "Description");
  textarea.setAttribute("maxlength", "250");
  textarea.classList.add("input-box");

  // Crea la sezione del form
  const formSection = document.createElement("div");
  formSection.classList.add("formSection");

  // Crea la prima coppia di tag
  const coupleTag1 = document.createElement("div");
  coupleTag1.classList.add("coupleTag");

  // Crea l'input per la data
  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("id", "date");
  inputDate.classList.add("input-box");

  // Crea il select per la priorità
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("name", "priority");
  selectPriority.setAttribute("id", "priority");
  selectPriority.classList.add("input-box");

  // Crea le opzioni del select per la priorità
  const optionDefault = document.createElement("option");
  optionDefault.setAttribute("disabled", "disabled");
  optionDefault.setAttribute("selected", "selected");
  optionDefault.textContent = "Priority";

  const optionLow = document.createElement("option");
  optionLow.setAttribute("value", "1");
  optionLow.textContent = "Low";

  const optionNormal = document.createElement("option");
  optionNormal.setAttribute("value", "2");
  optionNormal.textContent = "Normal";

  const optionHigh = document.createElement("option");
  optionHigh.setAttribute("value", "3");
  optionHigh.textContent = "High";

  // Aggiungi le opzioni al select
  selectPriority.appendChild(optionDefault);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionNormal);
  selectPriority.appendChild(optionHigh);

  // Aggiungi l'input data e il select alla prima coppia di tag
  coupleTag1.appendChild(inputDate);
  coupleTag1.appendChild(selectPriority);

  // Crea la seconda coppia di tag
  const coupleTag2 = document.createElement("div");
  coupleTag2.classList.add("coupleTag");

  // Crea il pulsante di cancellazione
  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("cancel", "input-box");
  buttonCancel.textContent = "Cancel";

  // Crea il pulsante di invio
  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit", "input-box");
  buttonSubmit.textContent = "Submit";

  // Aggiungi i pulsanti alla seconda coppia di tag
  coupleTag2.appendChild(buttonCancel);
  coupleTag2.appendChild(buttonSubmit);

  // Aggiungi le coppie di tag alla sezione del form
  formSection.appendChild(coupleTag1);
  formSection.appendChild(coupleTag2);

  // Aggiungi l'input nome e il textarea al form
  form.appendChild(inputName);
  form.appendChild(textarea);

  // Aggiungi la sezione del form al form
  form.appendChild(formSection);

  // Aggiungi il form all'elemento div selezionato
  divElement.appendChild(form);
}
function newProject() {
  const divProject = document.querySelector(".projects");

  // Crea l'input per il nome
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Project Name");
  inputName.classList.add("input-box");
  // Crea il pulsante di cancellazione
  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("cancel", "input-box");
  buttonCancel.textContent = "Cancel";

  // Crea il pulsante di invio
  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit", "input-box");
  buttonSubmit.textContent = "Submit";

  const coupleButton = document.createElement("div");
  coupleButton.classList.add("coupleTag");
  coupleButton.appendChild(buttonCancel);
  coupleButton.appendChild(buttonSubmit);

  const divInfo = document.querySelector(".info.blurred-box");
  divInfo.innerHTML = "";
  divInfo.appendChild(inputName);
  divInfo.appendChild(coupleButton);
}
