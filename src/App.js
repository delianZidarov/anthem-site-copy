import { React } from "react";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [prevIndex, setPrevIndex] = useState(11);
  const [nextIndex, setNextIndex] = useState(1);

  const prevImage = useRef();
  let carouselList;
  const images = [
    "/images/lightbox-cookies.jpg",
    "/images/lightbox-energy.jpg",
    "/images/lightbox-late-art.jpg",
    "/images/lightbox-lemonloaf.jpg",
    "/images/lightbox-sandwhich.jpg",
    "/images/lightbox-shakarato.jpg",
    "/images/lightbox-shakes.jpg",
    "/images/lightbox-tea.jpg",
    "/images/lightbox-tea-closeup.jpg",
    "/images/lightbox-tehetian.jpg",
    "/images/lightbox-vibes.jpg",
    "/images/lightbox-yum.jpg",
  ];
  //get the carousel itemslist on load not needed of the carousel is generated programatically
  useEffect(() => {
    carouselList = document.querySelectorAll(".carousel-item");
  }, []);
  //check which is the active carousel at the moment every 60ms and update the image index for prev and next image
  useEffect(() => {
    const intervalId = setInterval(() => {
      carouselList.forEach((node, index) => {
        if (node.classList.length > 2) {
          let nextI = index + 1 < 12 ? index + 1 : 0;
          let prevI = index - 1 > -1 ? index - 1 : 11;
          setNextIndex(nextI);
          setPrevIndex(prevI);
        }
      });
    }, 60);
    return () => clearInterval(intervalId);
  }, []);
  //handle cleanup for the next image display
  useEffect(() => {
    setTimeout(() => document.querySelector(".animateLeave")?.remove(), 500);
  }, [prevIndex]);
  //checks if the to see if the images need to be updated and upends a new image element to the divs next to the carousel
  useEffect(() => {
    let currentPrev = document.querySelector(".previousImage");

    if (currentPrev?.src !== images[prevIndex]) {
      let currentNext = document.querySelector(".nextImage");
      if (currentNext) currentNext.className = "animateLeave nextImage";

      let newPrevImg = document.createElement("img");
      newPrevImg.src = images[prevIndex];
      newPrevImg.className = "animateComeIn previousImage";
      newPrevImg.alt = "previous image";
      let newNextImg = document.createElement("img");
      newNextImg.src = images[nextIndex];
      newNextImg.className = "animateComeIn nextImage";
      newNextImg.alt = "next image";

      document.querySelector(".car-image.prev").appendChild(newPrevImg);
      document.querySelector(".car-image.next").appendChild(newNextImg);
      currentPrev?.remove();
    }
  }, [prevIndex]);
  return (
    <div className="App">
      <main>
        <div className="container-fluid main-display p-0">
          <div className="row ms-5 me-5">
            <div className="col-12 col-sm-8 offset-sm-2 p-0 pt-5 col-xl-6 offset-xl-3">
              <a href="#" className="btn giftcard-btn p-md-3 pd-lg-5 w-100 ms-sm-2 me-sm-2 ms-lg-5 me-lg-5 mt-5 mb-4">
                CHECK YOUR GIFT CARD BALANCE - OR - PURCHASE EGIFT CARDS
              </a>
            </div>
          </div>
          <div>
            <div className="row carousel-row gx-0 ms-5 me-5 ps-2 pe-2">
              <div className="col-2 col-xl-2 offset-xl-1">
                <div className="car-image prev"></div>
              </div>
              <div className="col-8 col-xl-6">
                <div className="carousel slide" data-bs-ride="carousel" id="productCarousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/images/lightbox-cookies.jpg" alt="cookies" className="d-block " />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/lightbox-energy.jpg" alt="energy drinks" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-late-art.jpg" alt="latte art" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-lemonloaf.jpg" alt="lemon loaf" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-sandwhich.jpg" alt="sandwhich" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-shakarato.jpg" alt="shakarato" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-shakes.jpg" alt="shakes" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-tea.jpg" alt="tea for 3" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-tea-closeup.jpg" alt="tea" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-tehetian.jpg" alt="tehetian" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-vibes.jpg" alt="vibes" className="d-block " />
                    </div>
                    <div className="carousel-item ">
                      <img src="/images/lightbox-yum.jpg" alt="yum" className="d-block " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 col-xl-2">
                <div className="car-image next"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <h1>EXPERIENCE HEROIC HOSPITALITY</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
