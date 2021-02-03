function navigateTo(ref) {
    document.querySelectorAll("#v-pills-tab>a").forEach((el, i) => {
        if (ref == el.getAttribute("href")) {
            el.click();
        }
    });
}

(() => {
    window.onload = () => {
        let all_li = document.querySelectorAll("#navbarSupportedContent > ul > li > a");
        let all_a = document.querySelectorAll("#v-pills-tab>a");
        for (let i = 0; i < all_li.length; i++) {
            all_li[i].addEventListener("click", (evt) => {
                evt.preventDefault();
                for (let i1 = 0; i1 < all_li.length; i1++) {
                    if (all_li[i1].classList.contains("active")) {
                        all_li[i1].classList.remove("active");
                    }
                }
                evt.target.classList.add("active");
                document.querySelector(evt.target.getAttribute("href")).click();
            });
        }
        for (let i = 0; i < all_a.length; i++) {
            all_a[i].addEventListener("click", evt => {
                for (let i1 = 0; i1 < all_li.length; i1++) {
                    if (all_li[i1].getAttribute("href") == "#" + all_a[i].getAttribute("id")) {
                        all_li[i1].classList.add("active");
                    } else {
                        all_li[i1].classList.remove("active");
                    }
                }
            });
        }
        if (window.location.href.split("#")[1] != undefined) {
            const p = (window.location.href.split("#")[1].lastIndexOf("-tab") != -1) ? window.location.href.split("#")[1] : window.location.href.split("#")[1] + "-tab";
            document.querySelector("#" + p).click();
        }
    };
})();