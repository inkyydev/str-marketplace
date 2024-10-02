const dataProcess = {
  "How to Sell": [
    "Create Listing",
    "Accept Offer",
    "Agree to Ticket Terms",
    "Buyer Submits Payment",
    "Complete Transfer Forms",
    "Payment Sent",
  ],
  "How to Buy": [
    "Make Offer",
    "Accept Offer",
    "Agree to Ticket Terms",
    "Buyer Submits Payment",
    "Complete Transfer Forms",
    "Payment Sent",
  ],
  "How to Transfer": [
    "Current Owner Submits Transfer",
    "New Owner Accepts Transfer",
    "New Owner Submits Payment",
    "Complete Transfer Forms",
    "Ticket Office Approves Transfer",
  ],
};

const howToSell = $(".how-to-sell-owl").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  items: 1,
});

const howToBuy = $(".how-to-buy-owl").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  items: 1,
});

const howToTransfer = $(".how-to-transfer-owl").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  items: 1,
});

const handleProgress = (currentForm) => {
  let appendProgress = "";

  currentForm.forEach((element, index) => {
    appendProgress += `<div class="current-progress" data-index=${index}><p>${element}</p></div>`;
  });

  $(".forms-progress").append(appendProgress);
};

function owlHandle() {
  const owl = $(".custom-forms__all.active .owl-carousel");

  owl.on("changed.owl.carousel", function (e) {
    const currentIndex = e.item.index;

    $(".current-progress").removeClass("active");

    for (let i = 0; i <= currentIndex; i++) {
      $(`.current-progress[data-index=${i}]`).addClass("active");
    }
  });

  owl.on("initialized.owl.carousel", function (e) {
    const currentIndex = e.item.index;

    $(".current-progress").removeClass("active");

    for (let i = 0; i <= currentIndex; i++) {
      $(`.current-progress[data-index=${i}]`).addClass("active");
    }
  });
}

owlHandle();
handleProgress(dataProcess["How to Sell"]);

$(`.forms-progress .current-progress:first-of-type`).addClass("active");

$(".forms-switch a").on("click", function (e) {
  e.preventDefault();

  const dataForm = $(this).attr("data-form");
  const currentTitle = $(this).text();

  $(".forms-switch a").removeClass("active");
  $(this).addClass("active");

  $(".forms-wrapper h2").text(currentTitle);

  $(".current-progress").remove();

  if (currentTitle === "How to Transfer") {
    $(".forms-progress").addClass("how-to-transfer");
  } else {
    $(".forms-progress").removeClass("how-to-transfer");
  }

  handleProgress(dataProcess[currentTitle]);

  $(".custom-forms__all").removeClass("active");
  $(".custom-forms__all." + dataForm).addClass("active");

  $(".custom-arrows__all").removeClass("active");
  $(".custom-arrows__all." + dataForm).addClass("active");

  $(`.forms-progress .current-progress:first-of-type`).addClass("active");

  owlHandle();
});

$(".how_to_sell .customPrevBtn").click(function (e) {
  e.preventDefault();
  howToSell.trigger("prev.owl.carousel", [300]);
});
$(".how_to_sell .customNextBtn").click(function (e) {
  e.preventDefault();
  howToSell.trigger("next.owl.carousel", [300]);
});

$(".how_to_buy .customPrevBtn").click(function (e) {
  e.preventDefault();
  howToBuy.trigger("prev.owl.carousel", [300]);
});
$(".how_to_buy  .customNextBtn").click(function (e) {
  e.preventDefault();
  howToBuy.trigger("next.owl.carousel", [300]);
});

$(".how_to_transfer .customPrevBtn").click(function (e) {
  e.preventDefault();
  howToTransfer.trigger("prev.owl.carousel", [300]);
});
$(".how_to_transfer .customNextBtn").click(function (e) {
  e.preventDefault();
  howToTransfer.trigger("next.owl.carousel", [300]);
});

$(document).on("click", ".forms-progress .current-progress", function () {
  const currentIndex = $(this).attr("data-index");
  const currentTab = $(this)
    .closest(".forms-wrapper")
    .find(".forms-switch a.active")
    .attr("data-form");

  if (currentTab === "how_to_sell") {
    howToSell.trigger("to.owl.carousel", currentIndex);
  } else if (currentTab === "how_to_buy") {
    howToBuy.trigger("to.owl.carousel", currentIndex);
  } else {
    howToTransfer.trigger("to.owl.carousel", currentIndex);
  }
});
