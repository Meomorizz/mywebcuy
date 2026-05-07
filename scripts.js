document.addEventListener("DOMContentLoaded", () => {

    // DATA MENU (tinggal edit sini kalau mau tambah menu)
    const menu = [
        {
            nama: "Matcha & Mangga",
            desc: "Segar dan manis menyatu.",
            img: "kopi.png"
        },
        {
            nama: "Cappuccino",
            desc: "Perpaduan kopi, susu, dan foam lembut.",
            img: "kopi.png"
        },
        {
            nama: "Latte",
            desc: "Kopi susu creamy yang menenangkan.",
            img: "kopi.png"
        }
    ];

    const container = document.getElementById("menu-list");

    // generate menu otomatis
    menu.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="card menu-card shadow-sm">
                <img src="${item.img}" class="card-img-top">
                <div class="card-body text-center">
                    <h5>${item.nama}</h5>
                    <p>${item.desc}</p>
                    <button class="btn btn-dark btn-order">${item.nama}</button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    // tombol order
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-order")) {
            const btn = e.target;

            btn.innerText = "✔ Dipesan";
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-success");
            btn.disabled = true;
        }
    });

    // aktifkan carousel review
    const carousel = document.querySelector("#carouselExample");
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 2500
        });
    }

});