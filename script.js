const terms = [
    "I agree to use the service responsibly.",
    "I will not share my password.",
    "I understand the privacy policy.",
    "I will not misuse the platform.",
    "I acknowledge data may be collected.",
    "I accept changes in policy.",
    "Ki monobas, Ara tavisuflebas",
    "I will keep my information accurate.",
    "I accept email communications.",
    "I agree to the arbitration clause."
  ];
  
  const termsList = document.getElementById("terms-list");
  const agreeBtn = document.getElementById("agree-btn");
  const checkAll = document.getElementById("check-all");
  const successMsg = document.getElementById("success-msg");
  
  // Generate term checkboxes
  terms.forEach((term, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <label class="inline-flex items-start">
        <input type="checkbox" class="term-checkbox mr-2 mt-1" id="term-${index}">
        <span class="text-gray-700">${term}</span>
      </label>
    `;
    termsList.appendChild(div);
  });
  
  const termCheckboxes = document.querySelectorAll(".term-checkbox");
  
  // Check all handler
  checkAll.addEventListener("change", () => {
    termCheckboxes.forEach(cb => cb.checked = checkAll.checked);
    updateAgreeButton();
  });
  
  // Update button state
  termCheckboxes.forEach(cb => cb.addEventListener("change", () => {
    const allChecked = [...termCheckboxes].every(cb => cb.checked);
    checkAll.checked = allChecked;
    updateAgreeButton();
  }));
  
  function updateAgreeButton() {
    const allChecked = [...termCheckboxes].every(cb => cb.checked);
    agreeBtn.disabled = !allChecked;
  }
  
  agreeBtn.addEventListener("click", () => {
    successMsg.classList.remove("hidden");
  });
  