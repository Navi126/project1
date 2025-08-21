function toggleSection(header) {
  const section = header.parentElement;
  section.classList.toggle("collapsed");

  // Toggle the arrow symbol
  if (section.classList.contains("collapsed")) {
    header.innerHTML = header.innerHTML.replace("▼", "►");
  } else {
    header.innerHTML = header.innerHTML.replace("►", "▼");
  }
}

function highlightSearch() {
  // Get search input
  const searchTerm = document.querySelector(".search-box input").value.trim().toLowerCase();

  // Remove old highlights
  document.querySelectorAll(".highlight").forEach(el => {
    el.outerHTML = el.innerText;
  });

  if (!searchTerm) return;

  // Function to highlight text inside an element
  function highlightText(element) {
    const text = element.innerText;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    element.innerHTML = text.replace(regex, "<span class='highlight'>$1</span>");
  }

  // Highlight in sidebar list items
  document.querySelectorAll(".sidebar ul li").forEach(li => {
    highlightText(li);
  });

  // Highlight in article titles
  document.querySelectorAll(".card-title").forEach(title => {
    highlightText(title);
  });

  // Highlight in main paragraphs/headings
  document.querySelectorAll(".main-content p, .main-content h1, .main-content h2").forEach(el => {
    highlightText(el);
  });
}

// Trigger search on typing
document.querySelector(".search-box input").addEventListener("input", highlightSearch);
