let titles = [];

const handleTitles = (value) => {
  titles = [];
  $(".license-all .license-single").each(function () {
    const currentTitle = $(this).find("h5").text();

    titles.push(currentTitle);

    $(".license-single").hide();
  });

  value.forEach((element) => {
    $(`.license-single h5:contains("${element}")`)
      .closest(".license-single")
      .show();
  });
};

const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".search-wrapper");
const resultsWrapper = document.querySelector(".results");
// const noResults = document.querySelector(".no-results");

searchInput.addEventListener("keyup", () => {
  let results = [];
  let input = searchInput.value;

  if (input.length >= 2) {
    resultsWrapper.classList.add("active");
    // noResults.style.display = "block";

    results = titles.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    handleTitles(results);
  } else {
    $(".license-single").show();
    resultsWrapper.classList.remove("active");
    // noResults.style.display = "none";
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    resultsWrapper.innerHTML = "<p>No partners found</p>";
    // noResults.innerHTML = "<p>No tags found</p>";

    return;
  }

  const content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  // noResults.innerHTML = "";
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

$(document).on("click", ".results", function (e) {
  e.stopPropagation();
});

$(document).click(function () {
  $(".results").hide(); //hide the button
});
$(document).on("click", ".search-wrapper input", function (e) {
  e.stopPropagation();
  $(".results").show();
});
