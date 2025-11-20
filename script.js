<script>
      let slideIndex = 1;
      // İlk slaytı gösterir
      showSlides(slideIndex);

      // Sayfaya tıklandığında (veya slideshow-container'a) sonraki slayta geçer
      function nextSlide() {
        plusSlides(1);
      }

      // Sonraki/Önceki kontrolü için
      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      // Belirli bir noktaya tıklanınca o slayta gider
      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        // Tüm slaytları ve noktaları yakalar
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        // Eğer son slayttaysa başa döner (döngü)
        if (n > slides.length) {
          slideIndex = 1;
        }
        // Eğer ilk slayttaysa sona döner (döngü)
        if (n < 1) {
          slideIndex = slides.length;
        }

        // Tüm slaytları gizler
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        // Tüm noktaların aktifliğini kaldırır
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        // Güncel slaytı gösterir
        slides[slideIndex - 1].style.display = "block";

        // Güncel noktayı aktif hale getirir (eğer nokta varsa)
        if (dots.length > 0) {
          dots[slideIndex - 1].className += " active";
        }
      }

      // Klavye Ok Tuşları ile Geçişi etkinleştirir
      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          plusSlides(1); // Sağ ok: Sonraki slayt
        } else if (event.key === "ArrowLeft") {
          plusSlides(-1); // Sol ok: Önceki slayt
        }
      });
    </script>