/* =========================
   CHRISTMAS WONDERLAND
   ========================= */


/* =========================
   STARS
   ========================= */

const stars = document.getElementById("stars");

for (let i = 0; i < 80; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML =
        Math.random() > .8
            ? "✦"
            : "•";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 65 + "%";

    star.style.fontSize =
        Math.random() * 12 + 4 + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* =========================
   SNOW
   ========================= */

const snowContainer =
    document.getElementById("snow");

const snowSymbols = [
    "❄",
    "❅",
    "❆",
    "•"
];

for (let i = 0; i < 120; i++) {

    const snowflake =
        document.createElement("div");

    snowflake.className =
        "snowflake";

    snowflake.innerHTML =
        snowSymbols[
            Math.floor(
                Math.random() *
                snowSymbols.length
            )
        ];

    snowflake.style.left =
        Math.random() * 100 + "%";

    snowflake.style.fontSize =
        Math.random() * 14 + 7 + "px";

    snowflake.style.opacity =
        Math.random() * .8 + .2;

    snowflake.style.animationDuration =
        Math.random() * 8 + 6 + "s";

    snowflake.style.animationDelay =
        -(Math.random() * 12) + "s";

    snowContainer.appendChild(
        snowflake
    );
}


/* =========================
   SPARKLES
   ========================= */

const scene =
    document.getElementById("scene");

for (let i = 0; i < 40; i++) {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 80 + "%";

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";

    scene.appendChild(
        sparkle
    );
}


/* =========================
   CHRISTMAS GIFT MODAL
   ========================= */

const openGift =
    document.getElementById(
        "openGift"
    );

const modal =
    document.getElementById(
        "modal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


openGift.addEventListener(
    "click",
    () => {

        modal.classList.add(
            "active"
        );

        createExplosion();
    }
);


closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );
    }
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "active"
            );
        }
    }
);


/* =========================
   PARTICLE EXPLOSION
   ========================= */

function createExplosion() {

    const symbols = [
        "✨",
        "🎄",
        "⭐",
        "❄",
        "🎁"
    ];

    for (let i = 0; i < 40; i++) {

        const particle =
            document.createElement(
                "div"
            );

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.fontSize =
            Math.random() * 20 +
            12 +
            "px";

        particle.style.zIndex =
            "200";

        particle.style.pointerEvents =
            "none";

        document.body.appendChild(
            particle
        );

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            Math.random() *
            350 +
            100;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.5)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1500 +
                    Math.random() * 1000,

                easing:
                    "cubic-bezier(.17,.67,.83,.67)"
            }
        );

        setTimeout(
            () => {
                particle.remove();
            },
            2600
        );
    }
}


/* =========================
   TREE PARALLAX
   ========================= */

const tree =
    document.getElementById(
        "tree"
    );


document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX /
            window.innerWidth -
            .5;

        const y =
            event.clientY /
            window.innerHeight -
            .5;

        tree.style.transform =
            `translateX(calc(-50% + ${x * 25}px))
             translateY(${y * 15}px)`;
    }
);


/* =========================
   TOUCH PARALLAX
   ========================= */

document.addEventListener(
    "touchmove",
    event => {

        if (
            !event.touches.length
        ) {
            return;
        }

        const touch =
            event.touches[0];

        const x =
            touch.clientX /
            window.innerWidth -
            .5;

        const y =
            touch.clientY /
            window.innerHeight -
            .5;

        tree.style.transform =
            `translateX(calc(-50% + ${x * 20}px))
             translateY(${y * 10}px)`;
    },
    {
        passive: true
    }
);


/* =========================
   KEYBOARD CONTROLS
   ========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            modal.classList.add(
                "active"
            );

            createExplosion();
        }

        if (
            event.key === "Escape"
        ) {

            modal.classList.remove(
                "active"
            );
        }
    }
);


/* =========================
   AUTOMATIC CHRISTMAS MUSIC
   ========================= */

const christmasSong =
    document.getElementById(
        "christmasSong"
    );

christmasSong.volume = 0.7;


/*
   Try to start the music
   automatically.
*/

function playChristmasMusic() {

    christmasSong
        .play()
        .catch(() => {

            console.log(
                "Autoplay was blocked by the browser."
            );
        });
}


/*
   Try immediately when
   the page loads.
*/

window.addEventListener(
    "load",
    () => {

        playChristmasMusic();
    }
);


/*
   If the browser blocks
   autoplay, try again after
   the user's first interaction.
*/

document.addEventListener(
    "click",
    () => {

        if (
            christmasSong.paused
        ) {

            playChristmasMusic();
        }

    },
    {
        once: true
    }
);


/* =========================
   END
   ========================= */